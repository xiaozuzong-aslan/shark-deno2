
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
      <button @click="clearNumber">清空</button>
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
import contNumber from "@/lib/cont.js";
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
    clearNumber() {
      this.output = "0";
    },
    changeNumber(event) {
      const { output } = this;
      const value = event.target.innerText;
      const lastIndex = output.length - 1;
      if (output[lastIndex] === "+" || output[lastIndex] === "-") {
        this.cont = "完成";
      }
      if ("0123456789.".indexOf(value) >= 0) {
        if (output.indexOf("-") >= 0 || output.indexOf("+") >= 0) {
          this.cont = "=";
        }
        if (output === "0") {
          if (value === "0") {
            return;
          } else if(value==='.'){
            this.output += value
            return
          }
          else{
            this.output = value;
            return;
          }
        }
        if (value === ".") {
          if (output.indexOf(".") >= 0) {
            if (output.indexOf("+") >= 0) {
              const a = output.split("+");
              if (a[1] === "") {
                return;
              } else if (a[1].indexOf(".") < 0) {
                this.output += value;
                return;
              }
            } 
          } else if (output[lastIndex] === "+" || output[lastIndex] === "-") {
            return;
          } else {
            this.output += value;
          }
        } else {
          this.output += value;
        }
      }
      if ("-+".indexOf(value) >= 0) {
        if (output.indexOf("+") >= 0 || output.indexOf("-") >= 0) {
          if (output[lastIndex] === "+" || output[lastIndex] === "-") {
            this.output = output.slice(0, -1) + value;
          } else {
            this.output = contNumber(output) + value;
            this.cont = "完成";
          }
        } else {
          this.output += value;
        }
      }
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
    commit() {
      if (this.cont === "=") {
        const { output } = this;
        this.output = contNumber(output);
        this.cont = "完成";
      } else if (this.cont === "完成") {
        this.output = contNumber(this.output);
        this.$store.commit("changeNumber", this.output);
        this.$store.commit("changeAddToggle");
        this.$store.commit("changeCurrentKind", undefined);
        
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
  padding: 8px 16px;
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
    box-shadow: inset 0 3px 3px -3px fade-out(#000000, 0.65),
      inset 0 -3px 3px -3px fade-out(#000000, 0.65);
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