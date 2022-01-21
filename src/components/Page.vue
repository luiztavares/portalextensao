<template>
  <v-container fluid>
    <div id="header">
      <h4 class="text-white pt-6 px-6">
        Unidade: {{ this.$route.params.obj.unidade }}
      </h4>
      <h4 class="text-white px-6">
        Responsável: {{ this.$route.params.obj.coordenador }} ({{
          this.$route.params.obj.cargo
        }})
      </h4>

      <h1 class="text-white px-6 pt-6">{{ this.$route.params.obj.nome }}</h1>

      <v-chip class="mx-6 mt-6" color="cyan" label text-color="white">
        {{ this.$route.params.obj.modalidade }}
      </v-chip>

      <v-chip class="mx-6 mt-6" color="red" label text-color="white">
        {{ this.$route.params.obj['carga horária total']  }} Horas
      </v-chip>

      <v-chip class="mx-6 mt-6" color="orange" label text-color="white">
        {{ this.$route.params.obj['classificação curso'] }}
      </v-chip>

      <v-chip class="mx-6 mt-6" color="purple" label text-color="white">
        {{ this.$route.params.obj['programa de formação'] }}
      </v-chip>

    </div>
    <div class='pa-8'>
        <h1>Conteúdo Programático</h1>
    <p class='pa-8' v-html="this.$route.params.obj['conteúdo programático'].replace(/(?:\r\n|\r|\n)/g, '<br />')"></p>


    </div>

  </v-container>
</template>

<script>
export default {
    
  data() {
    return {
      allImages: [
        "apresentacao-de-danca.png",
        "arquivo.png",
        "Brasil Ensemble.png",
        "conhecendo-a-ufrj.png",
        "conhecendo.png",
        "coral infantil.png",
        "Curso de fotografia.png",
        "Foto farmacia.png",
        "Foto Projeto.png",
        "Laboratorio.png",
        "ladetec.png",
        "programa.png",
      ],
      imagesIndex: 0,
    };
  },
     methods: {
    filter(json, key, value) {
      return json.filter((x) => x[key] == value);
    },
    limit(json, max) {
      return json.slice(0, max);
    },
    nextImage() {
      return this.allImages[Math.floor(Math.random() * this.allImages.length)];
    },
  },
};
</script>

<style>
#header {
  background-color: #a463cf;
  min-height: 30vh;
}

.text-white {
  color: white;
}

</style>
