<template>
<div class="container"><div class="row"><div class="col">  <form>
    <div class="form-group" >
      <label for="Tema">Tema</label>
      <input
        type="text"
        class="form-control"
        id="Tema"
        placeholder="Introduce el tema"
        v-model="pregunta.Tema"
      />
    </div>
        <div>
            <label for="Tema">Temas ya creados</label>

    <select class="custom-select" v-model="pregunta.tema">
      <option :value="tema" v-for="(tema, index) in temas" :key="index" >
        {{ tema }}</option
      >
    </select>
        </div>
    <div class="form-group">
      <label for="Pregunta">Pregunta</label>
      <input
        type="text"
        class="form-control"
        id="Pregunta"
        v-model="pregunta.Pregunta"
        placeholder="Pregunta"
      />
    </div>

    <button  @click="sendPregunta()" class="btn btn-primary">Enviar</button>
  </form></div></div></div>
</template>

<script>
export default {
  name: "addpregunta",
  data() {
    return {
      temas: [],
      url: "http://127.0.0.1:3000/preguntas",
      pregunta: {
        Tema: "",
        Pregunta: "",
      },
    };
  },
  methods: {
    async sendPregunta() {
      let response = await this.axios.post(`${this.url}/add`, this.pregunta);
      if (response.data) {
        return alert("pregunta enviada");
      } 
       return  alert("error");
      
    },
    async getTemas() {
      let response = await this.axios.get(`${this.url}/topics`);
      if (response.data) {
        return this.temas = response.data.msg
      } 
       return  alert("error");
      
    },
  },
  mounted(){
    this.getTemas()
  }
};
</script>

<style scoped></style>
