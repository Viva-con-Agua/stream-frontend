<template>
  <div class="tag">
    <div class="content">
      <span class="field">
        {{ field }}
        <div class="tagButton">
        <button class="delete" v-on:click="deleteTag">
          -
        </button>
        </div>
      </span>
      <span v-if="hasValue" class="value">{{ value }}</span>
      <span v-else class="value"><slot></slot></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FilterTag",
    props: {
      "field": {
        "type": String,
        "required": true
      },
      "value": {
        "type": String,
        "default": null
      }
    },
    computed: {
      hasValue () {
        return typeof this.value !== "undefined" && this.value !== null && this.value !== ""
      }
    },
    methods: {
      deleteTag () {
        this.$emit("delete", this.value)
      }
    }
  }
</script>
<style scoped lang="less">
  @import '../assets/less/general.less';
  .tag {
    margin: 0.2em;
    padding: 0.2em 0.8em;
    /*min-width: 5em;*/
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: @radius;
    background-color: #colors[primaryDeactivated];
    color: #colors[secundary];
    .content {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      flex-grow: 1;
    }
    .field {
      font-size: 0.7em;
      width: 85%;
    }
    .value {
      flex-grow: 1;
      font-size: 1em;
      font-weight: bold;
    }
    .tagButton {
      font-size: 0.7em;
      border-radius: 0.8em;
      padding: 1px 1px;
      width: 10%;
    }
    &:hover {
      box-shadow: #shadow[primary];
      background-color: #colors[primary];
      /*padding: 0.3em 0.3em 0.3em 0.8em;*/
    }
  }
</style>
