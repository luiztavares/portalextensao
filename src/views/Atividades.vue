<template>
  <v-container>
      <v-row>
          <v-col>
            <v-autocomplete
            label="Tipo de Atividade"
            :items="Object.keys(filtros)"
            v-model="atividade"
            >
            </v-autocomplete>
          </v-col>


        <v-col v-for="filtro in filtros['Cursos']" :key='filtro' v-show="atividade == 'Cursos'">
            <v-autocomplete
            :label="filtro.label"
            :items="filtro.values"
            v-model="filtros.selected"
            >
            </v-autocomplete>
          </v-col>

          <v-col v-show="atividade == 'Eventos'">
            <v-autocomplete
            label="Inscrições Abertas"
            :items="atividades"
            v-model="atividade"
            >
            </v-autocomplete>
          </v-col>
          <v-col v-show="atividade == 'Eventos'">
            <v-autocomplete
            label="Área Temática"
            :items="atividades"
            v-model="atividade"
            >
            </v-autocomplete>
          </v-col>
          <v-col v-show="atividade == 'Eventos'">
            <v-autocomplete
            label="Unidade / Centro"
            :items="atividades"
            v-model="atividade"
            >
            </v-autocomplete>
          </v-col>

          <v-col v-show="atividade == 'Programas'">
            <v-autocomplete
            label="Área Temática"
            :items="atividades"
            v-model="atividade"
            >
            </v-autocomplete>
          </v-col>
          <v-col v-show="atividade == 'Programas'">
            <v-autocomplete
            label="Unidade / Centro"
            :items="atividades"
            v-model="atividade"
            >
            </v-autocomplete>
          </v-col>
          <v-col v-show="atividade == 'Programas'">
            <v-autocomplete
            label="Local"
            :items="atividades"
            v-model="atividade"
            >
            </v-autocomplete>
          </v-col>
          <v-col v-show="atividade == 'Programas'">
            <v-autocomplete
            label="Público"
            :items="atividades"
            v-model="atividade"
            >
            </v-autocomplete>
          </v-col>

      </v-row>

  </v-container>
</template>

<script>
import json from "../../public/dados.json";

export default {
    data(){
        return{
            
            cursos: json["SegmentacaoAcaoExtensaoCurso"],
            eventos: json["AcaoExtensaoEvento"],
            programas: json["AcaoExtensaoAcaoExtensaoProgram"],
            projetos: json["AcaoExtensaoProjeto"],
            atividade: null,
            atividades: ['Cursos','Eventos','Programas','Projetos'],
            areas: [],
            filtros:{
                Cursos:[
                    {
                        values: [],
                        label:'Cursos Abertos',
                        selected: null,
                    },
                    {
                        values: [],
                        label:'Formato',
                        selected: null,
                    },
                    {
                        values: [],
                        label:'Área Temática',
                        selected: null,
                    },
                    {
                        values: [],
                        label:'Classificação do Curso',
                        selected: null,
                    },
                    {
                        values: [],
                        label:'Unidade / Centro',
                        selected: null,
                    },

                ],
                Eventos:[],
                Projetos:[],
            }

        }
    },
    mounted: function () {
    {
      this.areas = Array.from(
        new Set(this.cursos.map((x) => x["área temática primária"]))
      );
    }
  },
}
</script>

<style>

</style>