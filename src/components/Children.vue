<template>
    <div>
      <h3>这是children.vue</h3>
      <slot :user="children" ></slot>
      <slot name="bottom" :person="person"></slot>
    </div>
</template>

<script>
export default {
  name: 'Children',
  data () {
    return {
      children: 'Mousong',
      person: {
        name: 'mm',
        age: 12,
        sex: 'male'
      }
    }
  }
}
</script>

<style scoped>

</style>
