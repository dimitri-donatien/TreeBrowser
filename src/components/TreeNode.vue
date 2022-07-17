<template>
  <div :style="nodeMargin">
    <div>
      {{ props.label }}: <span v-if="!hasChildren">{{ props.node }}</span>
      <font-awesome-icon
        v-if="hasChildren"
        :icon="toggleChildrenIcon"
        @click="toggleChildren"
        @keypress="toggleChildren"
      />
    </div>
    <div v-if="hasChildren" v-show="showChildren">
      <tree-node
        v-for="(obj, key, index) in props.node"
        :key="index"
        :node="obj"
        :label="key"
        :spacing="spacing + 10"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'

const props = defineProps({
  node: {
    type: Object,
  },
  label: {
    type: String,
  },
  spacing: {
    type: Number,
    default: 0,
  }
})

const showChildren = ref(false)

const nodeMargin = computed(() => {
  return {"margin-left": `${props.spacing}px`,};
})

const hasChildren = computed(() => {
  return typeof props.node !== "string";
})

const toggleChildrenIcon = computed(() => {
  return showChildren.value ? "fa-solid fa-circle-arrow-down" : "fa-solid fa-circle-arrow-right";
})

const toggleChildren = () => {
  return showChildren.value = !showChildren.value;
}
</script>