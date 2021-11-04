<template>
  List of active projects:

  <ul>
    <li v-for="(project, index) in projects" :key="index">
      <h3>{{ project.name }}</h3>

      <ul>
        <li v-for="(type, index) in project.type" :key="index">
          {{ type }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
const { data: projects } = await useFetch('/api/projects')
</script>
