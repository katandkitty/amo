<template>
  <div class="pad">
    <table>
      <tr>
        <th>Название</th>
        <th>Дата создания</th>
        <th>Бюджет</th>
      </tr>
      <tr v-for="lead in leads" :key="lead.id">
        <td class="name">{{ lead.name }}</td>
        <td>{{ new Date(lead.created_at*1000).toLocaleDateString("ru-RU") }}</td>
        <td>{{ lead.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableLeads',
  props: {
    leads: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pad {
  width: 70%;
  margin: auto;
  padding: 50px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
table {
  width: 100%;
  margin: auto;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #DDD;
}
tr:hover {background-color: #D6EEEE;}
.name {
  text-align: left;
}
</style>
