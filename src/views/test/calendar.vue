<template>
  <div class="calendar">
    <div class="select-header">
      <van-icon name="arrow-left" @click="changeMonth('subtract')" />
      <span>{{queryYear}}年</span><span class="month">{{queryMonth}}月</span>
      <van-icon name="arrow" @click="changeMonth('add')" />
    </div>
    <div class="week">
      <div v-for="(item,index) in week" :key="index">{{item}}</div>
    </div>
    <div class="day">
      <div v-for="(item,i) in monthList" :key="i" class="day-item" @click="onActive(item,i)" :style="currentIndex==i?'background-color: #2263e8;color: #fff;':''" :class="[isToday(item.date)?'today':'']">
        <span class="dd">{{item.dd||' '}}</span>
        <!-- <span class="holiday">{{isHoliday(item.date)}}</span> -->
        <span class="holiday" v-if="item.lunar">{{item.lunar.Term||item.lunar.IDayCn}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import $dayjs from 'dayjs'
import { calendar } from '@/utils/calendar'
export default {
  data() {
    return {
      queryYear: $dayjs().format('YYYY'),
      queryMonth: $dayjs().format('MM'),
      week: ['一', '二', '三', '四', '五', '六', '日'],
      monthList: [],
      curMonth: $dayjs().format('YYYY-MM'), // 当前年月
      currentIndex: null
    }
  },
  created() {
    this.getMonthList()
  },
  methods: {
    isToday(date) {
      return date == $dayjs().format('YYYY-MM-DD')
    },
    isHoliday(date) {
      const num = $dayjs(date).day()
      if (num == 6 || num == 0) {
        return '休'
      } else {
        return ' '
      }
    },
    onActive(data, i) {
      this.currentIndex = i
    },
    getMonthList() {
      this.monthList = []
      // 当前月多少天
      const numDays = $dayjs(this.curMonth).daysInMonth()
      // 周几---周日(0)改为7
      const todayWeek = $dayjs(this.curMonth + '-01').day() || 7
      for (let i = 1; i < todayWeek; i++) { // 填充空
        this.monthList.push({})
      }
      for (let i = 1; i <= numDays; i++) {
        const y = $dayjs(this.curMonth + i).format('YYYY')
        const m = $dayjs(this.curMonth + i).format('MM')
        const d = $dayjs(this.curMonth + i).format('DD')
        const lunar = this.solar2lunar(y, m, d)
        const dateObj = {
          date: $dayjs(this.curMonth + i).format('YYYY-MM-DD'),
          dd: $dayjs(this.curMonth + i).format('D'),
          lunar
        }
        this.monthList.push(dateObj)
      }
      let len = this.monthList.length % 7
      len = len ? 7 - len : len
      for (let i = 0; i < len; i++) {
        this.monthList.push({})
      }
      // console.log(numDays, todayWeek, this.monthList);
    },
    /**
     * 获取农历
     * @y 年
     * @m 月
     * @d 日
     */
    solar2lunar(y, m, d) {
      const date = calendar.solar2lunar(y, m, d)
      return date
    },
    changeMonth(type) {
      this.currentIndex = null
      if (type == 'subtract') {
        this.curMonth = $dayjs(this.curMonth + '-01').subtract(1, 'month').format('YYYY-MM')
      } else {
        this.curMonth = $dayjs(this.curMonth + '-01').add(1, 'month').format('YYYY-MM')
      }
      this.queryYear = $dayjs(this.curMonth).format('YYYY')
      this.queryMonth = $dayjs(this.curMonth).format('MM')
      this.getMonthList()
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  margin: 25px 20px 25px 20px;
  background-color: #fff;
  padding: 20px 10px;
}
.select-header {
  margin: 0 auto;
  width: 175px;
  // background-color: red;
  font-size: 18px;
  font-weight: 700;
  color: #222731;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .month {
    margin-left: -12px;
  }
}
.week {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  color: #9097a5;
  margin-bottom: 12px;
  margin-top: 15px;
}
.day {
  display: flex;
  // align-items: center;
  // justify-content: space-around;
  font-size: 16px;
  flex-wrap: wrap;
  color: #9097a5;
  .day-item {
    display: block;
    border-radius: 50%;

    // margin: 18px;
    // flex: 1;
    width: 45px;
    height: 45px;
    text-align: center;
    // padding: 19px;
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;
    .holiday {
      display: block;
      font-size: 10px;
      -webkit-transform: scale(.9);
      margin-top: -3px;
    }
    .dd {
      margin-top: 6px;
      font-size: 18px;
    }
    .active {
      background-color: #2263e8;
    }
  }
}
.today{
  background-color: #409eff;
  color: #fff;
}
</style>
