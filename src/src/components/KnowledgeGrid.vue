<template>
  <ul>
    <knowledge-element
      v-for="topic in topics1"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics1'],
  emits: ['select-topic'],
  created () {
    console.log(this.topics)
  }
}
</script>
