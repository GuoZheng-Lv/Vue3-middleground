<template>
  <div class="wrap">
    <div class="input">
      <input type="text" placeholder="请输入任务标题" v-model="title" @keyup.enter="handleAddTask" />
    </div>
    <ul class="list">
      <li :class="item.status === 1 ? 'active' : ''" v-for="(item, index) in filterList" :key="item.id">
        <div class="left">
          <input type="checkbox" :value="item.id" v-model="checkedArr" />
          <span class="orange" v-show="item.status === 1">✔</span>
          {{ item.title }}
        </div>
        <div class="right">
          <button class="btn" @click="handleModifyStatus(item)">
            切换为{{ item.status === 1 ? "未完成" : "已完成" }}
          </button>
          <a href="javascript:;" @click="hadleDelete(index)">x</a>
        </div>
      </li>
    </ul>
    <div class="operate">
      <div class="left">
        <button @click="handleBatchDeleteTask">删除选中项</button>
        <button @click="handleBatchSetStatus(1)">设为已完成</button>
        <button @click="handleBatchSetStatus(0)">设为未完成</button>
      </div>
      <div class="right">
        <span :class="sort === 'all' ? 'active' : ''" @click="handleSwitchSort('all')">全部</span>
        <span :class="sort === 'done' ? 'active' : ''" @click="handleSwitchSort('done')">已完成</span>
        <span :class="sort === 'undone' ? 'active' : ''" @click="handleSwitchSort('undone')">未完成</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, computed, ComputedRef } from "vue";
interface ITask {
  id: number;
  title: string;
  status: number;
}
interface IDataProps {
  title: string;
  list: ITask[];
  checkedArr: number[];
  sort: string;
  filterList: any;
  handleModifyStatus: (item: ITask) => void;
  hadleDelete: (index: number) => void;
  handleAddTask: () => void;
  handleBatchDeleteTask: () => void;
  handleBatchSetStatus: (status: number) => void;
  handleSwitchSort: (sort: string) => void;
}

export default {
  name: "About",
  setup() {
    const data: IDataProps = reactive({
      title: "",
      list: [
        {
          id: 1,
          title: "html5+css3",
          status: 1,
        },
        {
          id: 2,
          title: "javascript",
          status: 1,
        },
        {
          id: 3,
          title: "nodejs",
          status: 0,
        },
      ],
      checkedArr: [],
      sort: "all",
      filterList: computed(() => {
        switch (data.sort) {
          case "all":
            return data.list;
            break;
          case "done":
            return data.list.filter((item) => {
              return item.status === 1;
            });
            break;
          case "undone":
            return data.list.filter((item) => {
              return item.status === 0;
            });
            break;
          default:
            return data.list;
            break;
        }
      }),
      handleModifyStatus(item: ITask) {
        item.status = item.status === 1 ? 0 : 1;
      },
      hadleDelete(index: number) {
        data.list.splice(index, 1);
      },
      handleAddTask() {
        const task = {
          id: Date.now(),
          title: data.title,
          status: 0,
        };
        data.list.push(task);
        data.title = "";
      },
      handleBatchDeleteTask() {
        // 先打印checkedArr，打印出来的是选中的任务的id，也就是要删除的任务，
        // 使用数组的filter方法过滤出不在checkedArr中的任务，那过滤出来的数组就是要保留的任务
        const arr: ITask[] = data.list.filter((item: ITask) => {
          return !data.checkedArr.includes(item.id);
        });

        // console.log(arr);
        data.list = arr;
      },
      handleBatchSetStatus(status: number) {
        data.list.forEach((item: ITask) => {
          if (data.checkedArr.includes(item.id)) {
            item.status = status;
          }
        });
      },
      handleSwitchSort(sort: string) {
        data.sort = sort;
      },
    });

    return toRefs(data);
  },
};
</script>

<style lang="less" scoped>
.wrap {
  padding: 20px;
}

.input input {
  width: 100%;
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #05e;
  margin-top: 10px;
  color: #fff;
}

.list li.active {
  background-color: #090;
}

.list li span.delete {
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  margin-left: 16px;
}

.list li .btn {
  cursor: pointer;
}

.orange {
  color: #f90;
}

.operate {
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin-top: 10px;
  background-color: #f90;
  padding: 8px;
}

.operate .right span {
  cursor: pointer;
}

.operate .right span.active {
  color: #090;
  font-weight: bold;
}
</style>