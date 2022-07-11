<template>
  <div class="min-h-screen w-full bg-gray-900">
    <section v-if="error">
      <p>We're sorry, we are unable to retrieve this information at this time. Please retry later.</p>
    </section>

    <section v-else class="p-8">

      <div v-if="loading">loading...</div>

        <div v-else v-for="info in infos" :key="info.uuid">

          <tree-comp :infos="info"></tree-comp>

        </div>

    </section>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useFetch } from '@/api/useFetch';
import TreeComp from '@/components/TreeComp.vue';

const url = ref("https://valorant-api.com/v1/agents")

const { response, error, loading } = useFetch(url.value)

const infos = ref(response);

</script>

<style lang="scss" scoped>

</style>