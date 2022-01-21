<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      height="88"
      src="../public/fundo header.png"
      elevation="0"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" min-height="88"></v-img>
      </template>
      <div class="d-flex align-center">
        <a href="/"><v-img
          alt="Vuetify Logo"
          class=" mr-2"
          contain
          src="../public/portal extensão - tipografia.png"
          transition="scale-transition"
          height="88"
        /></a>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://portal.ufrj.br/Inscricao/extensao/acaoExtensao/filtro"
        target="_blank"
        rel="noreferrer"
        text
        color="#ffdc00"
      >
        <span class="mr-2 appbar-text">Consulta de ações</span>
      </v-btn>


      <v-btn
        href="https://xn--extenso-2wa.ufrj.br/index.php/2-sem-categoria/487-extensao-na-midia"
        target="_blank"
        rel="noreferrer"
        text
        color="#ffdc00"
      >
        <span class="mr-2 appbar-text">Extensão na Mídia</span>
      </v-btn>

     <v-btn
        href="https://forms.gle/iPBWDZZCyeR1FSA68"
        target="_blank"
        rel="noreferrer"
        text
        color="#ffdc00"
      >
        <span class="mr-2 appbar-text">Divulgue sua Ação</span>
      </v-btn>

      <!-- <v-btn
        href="https://xn--extenso-2wa.ufrj.br/index.php/80-comunica-extensao/399-comunica-ufrj"
        target="_blank"
        rel="noreferrer"
        text
        color="#ffdc00"
      >
        <span class="mr-2 appbar-text">Comunica Extensão</span>
      </v-btn> -->

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style >
  .appbar-text{
    font-size: 1.2em;
  }

</style>