<template>
  <div>

    <nav class="tree-nav" v-for="(value, name, index) in infos" :key="index">
      <details class="tree-nav__item is-expandable" >
        <summary class="tree-nav__item-title">
          {{ index + ' ' + name }}
        </summary>
          <details class="tree-nav__item is-expandable" >
            <summary class="tree-nav__item-title">
              {{ value }}
            </summary>
          </details>
      </details>
    </nav>

  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  infos: Object,
});

</script>

<style lang="scss" scoped>

summary {
  display: block;
  cursor: pointer;
  outline: 0; 
}

summary::-webkit-details-marker {
  display: none;
}

.tree-nav__item {
  display: block;
  white-space: nowrap;
  color: #ccc;
  position: relative;
}

.tree-nav__item.is-expandable::before {
  border-left: 1px solid #fff;
  // content: "";
  left: 0.8rem;
  position: absolute;
  top: 2.4rem;
  height: calc(100% - 2.4rem);
}

.tree-nav__item .tree-nav__item {
  margin-left: 2.4rem;
}

.tree-nav__item.is-expandable[open] > .tree-nav__item-title::before {
  transform: rotate(90deg);
}

.tree-nav__item.is-expandable > .tree-nav__item-title {
  padding-left: 2.4rem;
}

.tree-nav__item.is-expandable > .tree-nav__item-title::before {
  position: absolute;
  will-change: transform;
  transition: transform 300ms ease;
  color: #fff;
  font-size: 1.1rem;
  left: 0;
  display: inline-block;
  width: 1.6rem;
  text-align: center;
}

.tree-nav__item-title {
  cursor: pointer;
  display: block;
  outline: 0;
  color: #fff;
  font-size: 1.5rem;
  line-height: 3.2rem;
}

.tree-nav__item-title .icon {
  display: inline;
  padding-left: 1.6rem;
  margin-right: 0.8rem;
  color: #666;
  font-size: 1.4rem;
  position: relative;
}

.tree-nav__item-title .icon::before {
  top: 0;
  position: absolute;
  left: 0;
  display: inline-block;
  width: 1.6rem;
  text-align: center;
}

.tree-nav__item-title::-webkit-details-marker {
  display: none;
}

</style>