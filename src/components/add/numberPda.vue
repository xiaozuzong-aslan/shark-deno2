
<template>
  <div class="numberPad">
    <div class="notes">
      <Icon iconName="notes" />
      <span>备注:</span>
      <input type="text" />
      <div class="output">01234567</div>
    </div>
    <div class="buttons">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>
        <Icon iconName="date" />今天
      </button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>
        <Icon iconName="delete" />
      </button>
      <button>完成</button>
    </div>
  </div>
</template>

<script>
export default {};
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
  .output {
    width: 5em;

    text-align: right;
  }
}
.numberPad {
  position: fixed;
  z-index: 2;
    
  ul {
    display: flex;
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