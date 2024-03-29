<template>
<uni-shadow-root class="vant-weapp-calendar-components-month-index"><view class="van-calendar__month" :style="computed.getMonthStyle(visible, date, rowHeight)">
  <view v-if="showMonthTitle" class="van-calendar__month-title">
    {{ computed.formatMonthTitle(date) }}
  </view>

  <view v-if="visible" class="van-calendar__days">
    <view v-if="showMark" class="van-calendar__month-mark">
      {{ computed.getMark(date) }}
    </view>

    <view v-for="(item,index) in (days)" :key="item.index" :style="computed.getDayStyle(item.type, index, date, rowHeight, color)" :class="(utils.bem('calendar__day', [item.type]))+' '+(item.className)" :data-index="index" @click="onClick">
      <view v-if="item.type === 'selected'" class="van-calendar__selected-day" :style="'background: '+(color)">
        <view v-if="item.topInfo" class="van-calendar__top-info">{{ item.topInfo }}</view>
        {{ item.text }}
        <view v-if="item.bottomInfo" class="van-calendar__bottom-info">
          {{ item.bottomInfo }}
        </view>
      </view>

      <view v-else>
        <view v-if="item.topInfo" class="van-calendar__top-info">{{ item.topInfo }}</view>
        {{ item.text }}
        <view v-if="item.bottomInfo" class="van-calendar__bottom-info">
          {{ item.bottomInfo }}
        </view>
      </view>
    </view>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs><wxs src="../../../wxs/utils.wxs" module="utils"></wxs>
<script>

global['__wxRoute'] = 'vant-weapp/calendar/components/month/index'
import { VantComponent } from '../../../common/component';
import {
  getMonthEndDay,
  compareDay,
  getPrevDay,
  getNextDay,
} from '../../utils';
VantComponent({
  props: {
    date: {
      type: null,
      observer: 'setDays',
    },
    type: {
      type: String,
      observer: 'setDays',
    },
    color: String,
    minDate: {
      type: null,
      observer: 'setDays',
    },
    maxDate: {
      type: null,
      observer: 'setDays',
    },
    showMark: Boolean,
    rowHeight: null,
    formatter: {
      type: null,
      observer: 'setDays',
    },
    currentDate: {
      type: null,
      observer: 'setDays',
    },
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
  },
  data: {
    visible: true,
    days: [],
  },
  methods: {
    onClick(event) {
      const { index } = event.currentTarget.dataset;
      const item = this.data.days[index];
      if (item.type !== 'disabled') {
        this.$emit('click', item);
      }
    },
    setDays() {
      const days = [];
      const startDate = new Date(this.data.date);
      const year = startDate.getFullYear();
      const month = startDate.getMonth();
      const totalDay = getMonthEndDay(
        startDate.getFullYear(),
        startDate.getMonth() + 1
      );
      for (let day = 1; day <= totalDay; day++) {
        const date = new Date(year, month, day);
        const type = this.getDayType(date);
        let config = {
          date,
          type,
          text: day,
          bottomInfo: this.getBottomInfo(type),
        };
        if (this.data.formatter) {
          config = this.data.formatter(config);
        }
        days.push(config);
      }
      this.setData({ days });
    },
    getMultipleDayType(day) {
      const { currentDate } = this.data;
      if (!Array.isArray(currentDate)) {
        return '';
      }
      const isSelected = (date) =>
        currentDate.some((item) => compareDay(item, date) === 0);
      if (isSelected(day)) {
        const prevDay = getPrevDay(day);
        const nextDay = getNextDay(day);
        const prevSelected = isSelected(prevDay);
        const nextSelected = isSelected(nextDay);
        if (prevSelected && nextSelected) {
          return 'multiple-middle';
        }
        if (prevSelected) {
          return 'end';
        }
        return nextSelected ? 'start' : 'multiple-selected';
      }
      return '';
    },
    getRangeDayType(day) {
      const { currentDate, allowSameDay } = this.data;
      if (!Array.isArray(currentDate)) {
        return;
      }
      const [startDay, endDay] = currentDate;
      if (!startDay) {
        return;
      }
      const compareToStart = compareDay(day, startDay);
      if (!endDay) {
        return compareToStart === 0 ? 'start' : '';
      }
      const compareToEnd = compareDay(day, endDay);
      if (compareToStart === 0 && compareToEnd === 0 && allowSameDay) {
        return 'start-end';
      }
      if (compareToStart === 0) {
        return 'start';
      }
      if (compareToEnd === 0) {
        return 'end';
      }
      if (compareToStart > 0 && compareToEnd < 0) {
        return 'middle';
      }
    },
    getDayType(day) {
      const { type, minDate, maxDate, currentDate } = this.data;
      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled';
      }
      if (type === 'single') {
        return compareDay(day, currentDate) === 0 ? 'selected' : '';
      }
      if (type === 'multiple') {
        return this.getMultipleDayType(day);
      }
      /* istanbul ignore else */
      if (type === 'range') {
        return this.getRangeDayType(day);
      }
    },
    getBottomInfo(type) {
      if (this.data.type === 'range') {
        if (type === 'start') {
          return '开始';
        }
        if (type === 'end') {
          return '结束';
        }
        if (type === 'start-end') {
          return '开始/结束';
        }
      }
    },
  },
});
export default global['__wxComponents']['vant-weapp/calendar/components/month/index']
</script>
<style platform="mp-weixin">
@import '../../../common/index.css';.van-calendar{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;background-color:#fff;background-color:var(--calendar-background-color,#fff)}.van-calendar__month-title{text-align:center;height:44px;height:var(--calendar-header-title-height,44px);font-weight:500;font-weight:var(--font-weight-bold,500);font-size:14px;font-size:var(--calendar-month-title-font-size,14px);line-height:44px;line-height:var(--calendar-header-title-height,44px)}.van-calendar__days{position:relative;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-user-select:none;user-select:none}.van-calendar__month-mark{position:absolute;top:50%;left:50%;z-index:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:none;color:rgba(242,243,245,.8);color:var(--calendar-month-mark-color,rgba(242,243,245,.8));font-size:160px;font-size:var(--calendar-month-mark-font-size,160px)}.van-calendar__day,.van-calendar__selected-day{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;text-align:center}.van-calendar__day{position:relative;width:14.285%;height:64px;height:var(--calendar-day-height,64px);font-size:16px;font-size:var(--calendar-day-font-size,16px)}.van-calendar__day--end,.van-calendar__day--multiple-middle,.van-calendar__day--multiple-selected,.van-calendar__day--start,.van-calendar__day--start-end{color:#fff;color:var(--calendar-range-edge-color,#fff);background-color:#ee0a24;background-color:var(--calendar-range-edge-background-color,#ee0a24)}.van-calendar__day--start{border-radius:4px 0 0 4px;border-radius:var(--border-radius-md,4px) 0 0 var(--border-radius-md,4px)}.van-calendar__day--end{border-radius:0 4px 4px 0;border-radius:0 var(--border-radius-md,4px) var(--border-radius-md,4px) 0}.van-calendar__day--multiple-selected,.van-calendar__day--start-end{border-radius:4px;border-radius:var(--border-radius-md,4px)}.van-calendar__day--middle{color:#ee0a24;color:var(--calendar-range-middle-color,#ee0a24)}.van-calendar__day--middle:after{position:absolute;top:0;right:0;bottom:0;left:0;background-color:currentColor;content:"";opacity:.1;opacity:var(--calendar-range-middle-background-opacity,.1)}.van-calendar__day--disabled{cursor:default;color:#c8c9cc;color:var(--calendar-day-disabled-color,#c8c9cc)}.van-calendar__bottom-info,.van-calendar__top-info{position:absolute;right:0;left:0;font-size:10px;font-size:var(--calendar-info-font-size,10px);line-height:14px;line-height:var(--calendar-info-line-height,14px)}@media (max-width:350px){.van-calendar__bottom-info,.van-calendar__top-info{font-size:9px}}.van-calendar__top-info{top:6px}.van-calendar__bottom-info{bottom:6px}.van-calendar__selected-day{width:54px;width:var(--calendar-selected-day-size,54px);height:54px;height:var(--calendar-selected-day-size,54px);color:#fff;color:var(--calendar-selected-day-color,#fff);background-color:#ee0a24;background-color:var(--calendar-selected-day-background-color,#ee0a24);border-radius:4px;border-radius:var(--border-radius-md,4px)}
</style>