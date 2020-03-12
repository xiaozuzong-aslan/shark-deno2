
<template>
  <div class="numberPad">
    <div class="notes">
      <Icon iconName="notes" />
      <span>备注:</span>
      <input type="text" @input="changeInput" placeholder="在这里输入备注" />
    </div>
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="changeNumber">7</button>
      <button @click="changeNumber">8</button>
      <button @click="changeNumber">9</button>
      <button @click="changeNumber">
        <Icon iconName="date" />今天
      </button>
      <button @click="changeNumber">4</button>
      <button @click="changeNumber">5</button>
      <button @click="changeNumber">6</button>
      <button @click="changeNumber">+</button>
      <button @click="changeNumber">1</button>
      <button @click="changeNumber">2</button>
      <button @click="changeNumber">3</button>
      <button @click="changeNumber">-</button>
      <button @click="changeNumber">.</button>
      <button @click="changeNumber">0</button>
      <button @click="remove">
        <Icon iconName="delete" />
      </button>
      <button @click="commit">{{cont}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      output: "0",
      cont: "完成"
    };
  },

  methods: {
    changeInput(event) {
      this.$store.commit("changeNotes", event.target.value);
    },
    remove() {
      if (this.output[this.output.length - 2] === ".") {
        this.output = this.output.slice(0, this.output.length - 2);
      } else {
        if (this.output.length > 1) {
          this.output = this.output.slice(0, this.output.length - 1);
        } else {
          this.output = "0";
        }
      }
    },
    // changeNumber(event) {
    //   const { output } = this;
    //   const value = event.target.innerText;
    //   const lastIndex = output.length - 1;
    //   if ("0123456789.".indexOf(value)) {
    //     if (output === "0" && value === "0") {
    //       return;
    //     }
    //     if (value === "." && output.indexOf(".") >= 0) {
    //       if (output.indexOf("+") > 0 || output.indexOf("-") > 0) {
    //         const a = output.split("+");
    //         console.log(a.length)
    //         if (a.length===1) {
              
    //         }
    //       } else {
    //         return;
    //       }
    //     }
    //     this.output += value;
    //   }

      // if ("+-".indexOf(value) >= 0) {
      //   let a = output.split(value);
      //   if (".".indexOf(a[0]) >= 0 || ".".indexOf(a[1]) >= 0) {
      //     return;
      //   } else {
      //     if (value === "+" && output.indexOf(value) >= 1) {
      //       let contList = output.split("+");
      //       this.output = (
      //         parseFloat(contList[0]) + parseFloat(contList[1])
      //       ).toString();
      //       this.cont = "完成";
      //     } else if (value === "-" && output.indexOf(value) >= 1) {
      //       let contList = output.split("-");
      //       this.output = (
      //         parseFloat(contList[0]) - parseFloat(contList[1])
      //       ).toString();
      //       this.cont = "完成";
      //     }
      //   }
      // }
      // if (
      //   lastIndex >= output.indexOf("+") ||
      //   lastIndex >= output.indexOf("-")
      // ) {
      //   this.cont = "=";
      // }
      // if (".+-".indexOf(output[lastIndex]) >= 0) {
      //   if (".+-".indexOf(value) >= 0) {
      //     this.output = output.slice(0, -1) + value;
      //   } else {
      //     if (value !== "0") {
      //       this.output += value;
      //     }
      //   }
      // } else {
      //   if (output === "0") {
      //     if (value === "0") {
      //       return;
      //     } else if (value === ".") {
      //       this.output += value;
      //     } else {
      //       this.output = value;
      //     }
      //   } else {

      //     this.output += value;
      //   }
      // }
    // },
    commit() {
      if (this.cont === "=") {
        const { output } = this;
        if (output.indexOf("-") >= 1) {
          const contList = output.split("-");
          this.output = (
            parseFloat(contList[0]) - parseFloat(contList[1])
          ).toString();
          this.cont = "完成";
          console.log(this.cont);
        } else {
          const contList = output.split("+");
          this.output = (
            parseFloat(contList[0]) + parseFloat(contList[1])
          ).toString();
          this.cont = "完成";
          console.log(this.cont);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.notes {
  display: flex;
  align-items: center;
  background: $color-numberPad;
  padding: 0 16px;
  width: 100vw;
  input {
    background: transparent;
    border: none;
    flex-grow: 1;

    padding: 6px 3px;
  }

  span {
    margin: 0 10px;
  }
  svg {
    width: 26px;
    height: 26px;
  }
}
.numberPad {
  position: fixed;
  z-index: 2;

  ul {
    display: flex;
  }
  .output {
    padding: 5px 16px;
    text-align: right;
    border: 1px solid red;
    font-family: Consolas, monospace;
    background: $color-numberPad;
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    button {
      width: 25vw;
      height: 12.5vw;
      background: $color-numberPad;
      border: 1px solid rgba(#d2d3d7, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: 700;
      &:last-child {
        background: $color-yellow;
      }
      svg {
        width: 26px;
        height: 26px;
      }
    }
  }
}
</style>