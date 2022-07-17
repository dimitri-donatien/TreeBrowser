<template>
  <div class="container">
    <tree-node
      v-for="(node, key, index) in infos"
      :key="index"
      :node="node"
      :label="key"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TreeNode from "@/components/TreeNode.vue";

const infos = ref({
  firstname: "john",
  lastname: "doe",
  location: {
    address: "lorem ipsum dolor sitamet",
    zipcode: "XXXX",
  },
  cart: ["apple", "banana", "coconut"],
});
</script>