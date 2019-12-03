<template>
  <button :style="buttonStyles" @click="onClick">
    <slot></slot>
  </button>
</template>

<style lang="scss">
button {
  color: $primary-color;
}
</style>
<script>
export default {
  data: function() {
    return {
      buttonStyles: {
        border: '1px solid #eee',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        cursor: 'pointer',
        fontSize: 15,
        padding: '3px 10px',
        margin: 10,
      },
    }
  },

  methods: {
    onClick: function() {
      this.$emit('click')
    },
  }
}
</script>
