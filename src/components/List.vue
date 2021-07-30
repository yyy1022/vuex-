<template>
    <div id="app">
        <a-input placeholder="请输入任务" class="my_ipt"></a-input>
        <a-button type="primary">添加事项</a-button>
        <a-list bordered :dataSource="list" class="dt_list">
            <a-list-item slot="renderItem" slot-scope="item">
                <a-checkbox>{{item.info}}</a-checkbox>
                <a slot="actions">删除</a>
            </a-list-item>
            <div slot="footer" class="footer">
                <span>0条剩余</span>
                <a-button-group>
                    <a-button type="primary">全部</a-button>
                    <a-button>未完成</a-button>
                    <a-button>已完成</a-button>

                </a-button-group>
                <a>清除已完成</a>
            </div>
        </a-list>
    </div>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {
        list: [{
          id: 0,
          info: 'Racing car sprays bburning  fuel into crowd',
          done: false
        },
          {
            id: 1,
            info: 'Australian car sprays bburning  fuel into crowd',
            done: false
          },
          {
            id: 2,
            info: 'man car sprays bburning  fuel into crowd',
            done: false
          }]
      }
    }
  }
</script>

<style>

    #app {
        padding: 10px;
    }

    .my_ipt {
        width: 500px;
        margin-right: 10px;
    }

    .dt_list {
        width: 500px;
        margin-top: 10px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>


