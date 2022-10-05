<template>
  <section>
    <h2>My Friends</h2>
    <ul>
     <friend-contact></friend-contact>
     <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: {
    FriendContact 
  },
  data() {
    return {
FriendContact: [
        {
          id: "suzie",
          name: "Suzie Choi",
          phone: "+6583354565",
          email: "suzie@gmail.com",
        },
        {
          id: "marco",
          name: "Macro Hubert",
          phone: "+65123456789",
          email: "marco@gmail.com",
        },
      ],
    };
  },
};
</script>
