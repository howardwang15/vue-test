<template>
    <table class="table" style={style}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Size</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="target in data" v-bind:key="target.name">
                <td>{{target.name}}</td>
                <td>{{target.size}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
  name: 'Table',
  data () {
    return {
      style: {
        margin: '2vh'
      },
      data: [
        {
          name: 'target1.jpg',
          size: '5 MB'
        },
        {
          name: 'target2.jpg',
          size: '4.7 MB'
        },
        {
          name: 'target3.jpg',
          size: '2.7 MB'
        }
      ]
    }
  }
}
</script>
<style>

</style>
