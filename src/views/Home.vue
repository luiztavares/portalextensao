<template>
  <v-container>

    <!-- <v-carousel v-model="model">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->

    <v-row class="mt-6">
      <v-col>
        <div
          v-bind:class="{ active: selected === 'cursos' }"
          class="d-flex flex-column mb-6 align-center"
          @click="change('cursos')"
        >
          <v-avatar size="128px">
            <img src="../../public/cursos.png" alt="" />
          </v-avatar>
          <span>CURSOS</span>
        </div>
      </v-col>

      <v-col>
        <div
          v-bind:class="{ active: selected === 'eventos' }"
          class="d-flex flex-column mb-6 align-center"
          @click="change('eventos')"
        >
          <v-avatar size="128px">
            <img src="../../public/eventos.png" alt="" />
          </v-avatar>

          <span>EVENTOS</span>
        </div>
      </v-col>

      <v-col>
        <div
          v-bind:class="{ active: selected === 'projetos' }"
          class="d-flex flex-column mb-6 align-center"
          @click="change('projetos')"
        >
          <v-avatar size="128px">
            <img src="../../public/Projetos.png" alt="" />
          </v-avatar>
          <span>PROJETOS</span>
        </div>
      </v-col>

      <v-col>
        <div
          v-bind:class="{ active: selected === 'cultural' }"
          class="d-flex flex-column mb-6 align-center"
          @click="change('cultural')"
        >
          <v-avatar size="128px">
            <img src="../../public/circuito cultural.png" alt="" />
          </v-avatar>

          <span>SERVIÇOS</span>
        </div>
      </v-col>

      <v-col>
        <div
          v-bind:class="{ active: selected === 'programas' }"
          class="d-flex flex-column mb-6 align-center"
          @click="change('programas')"
        >
          <v-avatar size="128px">
            <img src="../../public/Programas.png" alt="" />
          </v-avatar>

          <span>PROGRAMAS</span>
        </div>
      </v-col>
    </v-row>

    <v-row v-if="selected === 'cursos'" id="cursos">
      <v-row>
        <v-col>
          <v-select :items="['Distância', 'Presencial']" label="Formato" solo></v-select>
        </v-col>
        
        <v-col>
        <v-select :items="[]" label="Área Temática" solo></v-select>
        </v-col>

        <v-col>
        <v-select :items="[]" label="Classifição" solo></v-select>
        </v-col>

        <v-col>
        <v-select :items="[]" label="Unidade" solo></v-select>
        </v-col>

      </v-row>

      <v-row>
      <v-col v-for="(curso, index) in cursos" :key="'curso' - index">
        <v-card class="mx-auto" max-width="344">
          <v-img src="../../public/Laboratorio.png" height="200px"></v-img>
          <v-chip class="mt-3 ml-3" color="primary" label> Curso </v-chip>
          <v-card-title> {{ curso.nome }} </v-card-title>

          <v-card-subtitle> {{ curso.coordenador }} </v-card-subtitle>

          <v-divider></v-divider>

          <v-card-text>
            <div class="d-flex flex-column mb-6 align-left">
              <span><strong>Cargo:</strong> {{ curso.cargo }}</span>
              <span><strong>Unidade:</strong> {{ curso.unidade }}</span>
            </div>

            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              {{ curso["área temática primária"] }}
            </v-chip>

            <v-chip class="ma-2" color="primary" label>
              <v-icon left> mdi-clock </v-icon>
              {{ curso["carga horária total"] }} Horas
            </v-chip>

            <v-chip class="ma-2" color="cyan" label text-color="white">
              <v-icon left> mdi-format-list-bulleted-type </v-icon>
              {{ curso["modalidade"] }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      </v-row>

    </v-row>

    <v-row v-if="selected === 'eventos'" id="eventos">
      
     <v-row>
        
        <v-col>
        <v-select :items="[]" label="Área Temática" solo></v-select>
        </v-col>

        <v-col>
        <v-select :items="[]" label="Unidade" solo></v-select>
        </v-col>

      </v-row>

      <v-row>
      <v-col v-for="(evento, index) in eventos" :key="'evento' - index">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="../../public/conhecendo-a-ufrj.png"
            height="200px"
          ></v-img>
          <v-chip class="mt-3 ml-3" color="primary" label> Evento </v-chip>
          <v-card-title> {{ evento.nome }} </v-card-title>

          <v-card-subtitle> {{ evento.coordenador }} </v-card-subtitle>

          <v-divider></v-divider>

          <v-card-text>
            <div class="d-flex flex-column mb-6 align-left">
              <span><strong>Cargo:</strong> {{ evento.cargo }}</span>
              <span><strong>Unidade:</strong> {{ evento.unidade }}</span>
            </div>

            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              {{ evento["área temática primária"] }}
            </v-chip>

            <v-chip class="ma-2" color="primary" label>
              <v-icon left> mdi-clock </v-icon>
              {{ evento["duração em dias"] }} Dias
            </v-chip>

            <v-chip class="ma-2" color="cyan" label text-color="white">
              <v-icon left> mdi-format-list-bulleted-type </v-icon>
              {{ evento["carga horária total"] }} Horas
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
      </v-row>

    </v-row>

    <v-row v-if="selected === 'programas'" id="programas">
      <v-col v-for="(programa, index) in programas" :key="'programa' - index">
        <v-card class="mx-auto" max-width="344">
          <v-img src="../../public/programa.png" height="200px"></v-img>
          <v-chip class="mt-3 ml-3" color="primary" label> Programa </v-chip>
          <v-card-title> {{ programa.nome }} </v-card-title>

          <v-card-subtitle> {{ programa.coordenador }} </v-card-subtitle>

          <v-divider></v-divider>

          <v-card-text>
            <div class="d-flex flex-column mb-6 align-left">
              <span><strong>Cargo:</strong> {{ programa.cargo }}</span>
              <span><strong>Unidade:</strong> {{ programa.unidade }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-if="selected === 'projetos'" id="projetos">
      <v-col v-for="(projeto, index) in projetos" :key="'projeto' - index">
        <v-card class="mx-auto" max-width="344">
          <v-img src="../../public/Foto Projeto.png" height="200px"></v-img>
          <v-chip class="mt-3 ml-3" color="primary" label> Projeto </v-chip>
          <v-card-title> {{ projeto.nome }} </v-card-title>

          <v-card-subtitle> {{ projeto.coordenador }} </v-card-subtitle>

          <v-divider></v-divider>

          <v-card-text>
            <div class="d-flex flex-column mb-6 align-left">
              <span><strong>Cargo:</strong> {{ projeto.cargo }}</span>
              <span><strong>Unidade:</strong> {{ projeto.unidade }}</span>
            </div>

            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              {{ projeto["área temática primária"] }}
            </v-chip>

            <v-chip class="ma-2" color="primary" label>
              <v-icon left> mdi-clock </v-icon>
              {{ projeto["duração pretendida em anos"] }} Anos
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import json from "../../public/dados.json";


export default {
  name: "Home",

  components: {},

  data() {
    return {
      cursos: json["SegmentacaoAcaoExtensaoCurso"],
      eventos: json["AcaoExtensaoEvento"],
      programas: json["AcaoExtensaoAcaoExtensaoProgram"],
      projetos: json["AcaoExtensaoProjeto"],
      selected: "eventos",
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    };
  },

  methods: {
    change(name) {
      this.selected = name;
      console.log("foo");
    },
  },
};
</script>

<style >
.active {
  background-color: rgba(0, 0, 0, 0.2);
}

.v-card__text,
.v-card__title {
  word-break: normal !important; /* maybe !important  */
}
</style>
