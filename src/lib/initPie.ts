import echarts from "vue-echarts-ts";

const initPie = (dataList:RecordItem[],type:'-'|'+') =>{
    const myChart = echarts.init(document.getElementById("pie"));
    const option = {
      title: {
        text: `${type === "-" ? "支出" : "收入"}`
      },
      tooltip: {
        // 提示
        trigger: "item", // 触发方式
        formatter: "{a} <br/>{b}: {c} ({d}%)" // 提示的格式
      },
      series: [
        {
          name: "单日",
          type: "pie",
          radius: "60%",
          data: [
            ...dataList.map(item => {
              return {
                value: item.data.number,
                name: (item.data.currentKind!).textName
              };
            })
          ]
        }
      ]
    };
    myChart.setOption(option);
}

export default initPie
