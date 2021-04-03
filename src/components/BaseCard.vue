<template>
  <div>
    <header>
      <slot name="main"></slot>
    </header>
    <slot name="second"/>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$slots.main)
  }
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
