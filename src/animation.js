/**
 * @file 动画类 控制全局动画
 * @author redmed
 */

import EventEmitter from './lib/eventemitter.js';
import utils from './lib/util.js';
import { requestAnimationFrame, cancelAnimationFrame } from './lib/animationframe.js';
import { Ev } from './lib/define.js';

class Animation extends EventEmitter {

    /**
     * 配置项
     * @type {Object}
     * @private
     */
    _options = {};

    /**
     * 子动画片段
     * @type {Array.<Clip>}
     * @private
     */
    _clips = [];

    /**
     * 动画进程标记
     * @type {number|null}
     * @private
     */
    _timer;

    static Event = Ev;

    /**
     * 构造函数
     * @param {Object=} options 配置项
     */
    constructor(options = {}) {
        super();
        this._options = options;
    }

    /**
     * 主进程动画函数
     * @private
     */
    _startAni() {

        let update = (timestamp) => {
            this._timer = requestAnimationFrame(update);
            this._update(timestamp);
        };

        this._timer = requestAnimationFrame(update);

    }

    /**
     * 更新动画
     * @param {number} timestamp
     * @private
     */
    _update(timestamp) {

        let clips = this._clips;

        this.emit(Ev.UPDATE, timestamp, clips);

        let i = 0;

        while (i < clips.length) {
            let clip = clips[ i ];

            let running = clip.update(timestamp);

            // 未结束的动画保存下来, 以便下次继续执行
            if (!running) {
                clip._animation = null;
                clips.splice(i, 1);
            }
            else {
                i++;
            }
        }

        this._clips = clips;

        this.emit(Ev.AFTER_UPDATE, timestamp, clips);

        if (clips.length === 0) {
            this._cancelTimer();
            this.emit(Ev.COMPLETE, timestamp);
        }

    }

    /**
     * 启动动画进程
     * @param {boolean=false} force 是否同时启动内部 Clip
     */
    start(force = true) {

        let clips = this._clips,
            len = clips.length;
        if (this._timer || len === 0) {
            return;
        }

        if (force) {
            let i = 0;
            while (i < len) {
                let clip = clips[ i++ ];
                clip.start();
            }
        }

        this.emit(Ev.START);
        this._startAni();

    }

    /**
     * 停止动画进程
     * @param {boolean=false} force 是否同时停止内部 Clip
     */
    stop(force = true) {

        this._stop(force);

    }

    pause(force = true) {

        this._stop(force, true);

    }

    _stop(force = true, pause = false) {

        this._cancelTimer(() => {
            let clips = this._clips,
                len = clips.length;

            if (len) {
                if (force) {
                    let i = -1;
                    while (++i < len) {
                        let clip = clips[ i ];
                        pause ? clip.pause() : clip.stop();
                    }

                }

                this.emit(pause ? Ev.PAUSE : Ev.STOP);
            }
        });

    }

    _cancelTimer(callback) {

        let timer = this._timer;

        if (timer) {
            cancelAnimationFrame(timer);
            this._timer = null;

            callback && callback();
        }

    }

    /**
     * 添加子动画片段
     * @param {Clip|Array.<Clip>} clips
     */
    addClip(clips) {

        if (!Array.isArray(clips)) {
            clips = [ clips ];
        }

        let i = -1,
            len = clips.length;

        while (++i < len) {
            let clip = clips[ i ];
            clip._animation = this;

            this._clips.push(clip);
        }

        return this;

    }

    /**
     * 移除子动画片段
     * @param {Clip=} clip
     */
    removeClip(clip) {

        let clips = this._clips;

        if (clip) {
            // let idx = clips.indexOf(clip);
            // if (idx != -1) {
            //     clip._animation = null;
            //     clips.splice(idx, 1);
            // }
            utils.remove(clips, c => {
                if (c === clip) {
                    c._animation = null;
                    return true;
                }
            });
        }
        else {
            let i = -1,
                len = clips.length;

            while (++i < len) {
                let c = clips[ i ];
                c._animation = null;
            }

            this._clips = [];
        }

        return this;

    }

    /**
     * 获得 Clips
     * @returns {Array.<Clip>}
     */
    getClips() {
        return this._clips;
    }

    /**
     * 析构函数
     */
    destroy() {

        this.stop();
        this.removeClip();

        this.off();

    }
}

export default Animation;
