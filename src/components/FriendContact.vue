<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>
<script>

export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "suzie",
        name: "Suzie Choi",
        phone: "+6583354565",
        email: "suzie@gmail.com",
      },
    }
  },
  methods:{
    toggleDetails(){
        this.detailsAreVisible = !this.detailsAreVisible
    },
  },
  computed:{
    console: ()=> console.log(this.detailsAreVisible)
  }
};
</script>
