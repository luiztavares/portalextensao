<template>
  <v-container>
    <v-carousel class="mt-5">
      <v-carousel-item
        v-for="(item, i) in carouselImages"
        :key="i"
        :src="item"
        :contain="true"
      ></v-carousel-item>
    </v-carousel>

    <div class="pa-5">
      <div class="my-12 py-12 " >
        <h1>Cursos para complementar sua formação acadêmica e cidadã</h1>
        <p class="subheader">
          Navege entre os cursos oferecidos pela extensão UFRJ, disponibilizamos
          cursos para diversos públicos e territorialidades.
        </p>
        <div class="navegation">
          <v-tabs v-model="cursosTab" align-with-title>
            <v-tab v-for="area in areas" :key="area">{{ area }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="cursosTab">
            <v-tab-item v-for="area in areas" :key="area" class="my-5">
              <p class="subheader">
                Os cursos relacionados ao tema
                <strong>{{ area }}</strong> possuem as seguintes capilaridades:
              </p>

              <div class="text-right">
                <v-chip
                  v-for="tag in areas_descrição[area]"
                  :key="tag"
                  class="ma-1"
                  color="gray"
                  outlined
                  label
                >
                  {{ tag }}
                </v-chip>
              </div>

              <p class="subheader pt-5">Navegue nos cursos abaixo:</p>

              <v-slide-group v-model="slideModel" show-arrows>
                <v-slide-item
                  v-for="(curso, index) in limit(
                    filter(cursos, 'área temática primária', area),
                    4
                  )"
                  :key="'curso' + index"
                >
                  <v-card class="ma-2" width="300" height="450">
                    <v-img :src="nextImage()" height="200px"></v-img>
                    <v-card-title class="pb-0"> {{ curso.nome }} </v-card-title>

                    <v-card-subtitle class="mt-2">
                      {{ curso.coordenador }}
                    </v-card-subtitle>

                    <v-card-text>
                      <v-chip
                        class="ma-2"
                        color="pink"
                        label
                        text-color="white"
                      >
                        <v-icon left> mdi-label </v-icon>
                        {{ curso["área temática primária"] }}
                      </v-chip>

                      <v-chip
                        class="ma-2"
                        color="cyan"
                        label
                        text-color="white"
                      >
                        <v-icon left> mdi-format-list-bulleted-type </v-icon>
                        {{ curso["carga horária total"] }} Horas
                      </v-chip>
                    </v-card-text>
                  </v-card>
                </v-slide-item>
                <v-slide-item>
                  <v-card class="ma-2" width="300" height="450">
                    <v-img :src="nextImage()" height="200px"></v-img>
                    <v-card-title class="pb-0">
                      <v-btn>Ver mais cursos</v-btn>
                    </v-card-title>
                    <v-card-subtitle class="mt-2">
                      Pesquise em todos os cursos da UFRJ
                    </v-card-subtitle>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>

      <div class="my-12 py-12 ">
        <h1>Eventos para criar novas conecções com pessoas e idéias</h1>
        <p class="subheader">
          Participe de diversos eventos virtuais e presenciais como oficinas,
          palestras, exposições entre outros.
        </p>
        <div class="navegation">
          <v-tabs v-model="eventosTab" align-with-title>
            <v-tab v-for="area in areas" :key="area">{{ area }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="eventosTab">
            <v-tab-item v-for="area in areas" :key="area" class="my-5">
              <p class="subheader">
                Os eventos relacionados ao tema
                <strong>{{ area }}</strong> abrangem:
              </p>

              <div class="text-right">
                <v-chip
                  v-for="tag in areas_descrição[area]"
                  :key="tag"
                  class="ma-1"
                  color="gray"
                  outlined
                  label
                >
                  {{ tag }}
                </v-chip>
              </div>

              <p class="subheader pt-5">Navegue nos eventos abaixo:</p>
              <v-slide-group v-model="slideModel" show-arrows>
                <v-slide-item
                  v-for="(curso, index) in limit(
                    filter(eventos, 'área temática primária', area),
                    4
                  )"
                  :key="'curso' + index"
                >
                  <v-card class="ma-2" width="300" height="450">
                    <v-img :src="nextImage()" height="200px"></v-img>
                    <v-card-title class="pb-0"> {{ curso.nome }} </v-card-title>

                    <v-card-subtitle class="mt-2">
                      {{ curso.coordenador }}
                    </v-card-subtitle>

                    <v-card-text>
                      <v-chip
                        class="ma-2"
                        color="pink"
                        label
                        text-color="white"
                      >
                        <v-icon left> mdi-label </v-icon>
                        {{ curso["área temática primária"] }}
                      </v-chip>

                      <v-chip class="ma-2" color="primary" label>
                        <v-icon left> mdi-clock </v-icon>
                        {{ curso["duração em dias"] }} Dias
                      </v-chip>

                      <v-chip
                        class="ma-2"
                        color="cyan"
                        label
                        text-color="white"
                      >
                        <v-icon left> mdi-format-list-bulleted-type </v-icon>
                        {{ curso["carga horária total"] }} Horas
                      </v-chip>
                    </v-card-text>
                  </v-card>
                </v-slide-item>
                <v-slide-item>
                  <v-card class="ma-2" width="300" height="450">
                    <v-img :src="nextImage()" height="200px"></v-img>
                    <v-card-title class="pb-0">
                      <v-btn>Ver mais cursos</v-btn>
                    </v-card-title>
                    <v-card-subtitle class="mt-2">
                      Pesquise em todos os cursos da UFRJ
                    </v-card-subtitle>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>

      <!-- <div class="mt-5">
        <h1>Programas</h1>

        <v-tabs v-model="programasTab" align-with-title>
          <v-tab v-for="area in areas" :key="area">{{ area }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="programasTab">
          <v-tab-item v-for="area in areas" :key="area" class="my-5">
            <v-slide-group v-model="slideModel" show-arrows>
              <v-slide-item
                v-for="(curso, index) in limit(
                  filter(programas, 'área temática primária', area),
                  4
                )"
                :key="'curso' + index"
              >
                <v-card class="ma-2" width="300" height="450">
                  <v-img :src="nextImage()" height="200px"></v-img>
                  <v-card-title class="pb-0"> {{ curso.nome }} </v-card-title>

                  <v-card-subtitle class="mt-2">
                    {{ curso.coordenador }}
                  </v-card-subtitle>

                  <v-card-text>
                    <v-chip class="ma-2" color="pink" label text-color="white">
                      <v-icon left> mdi-label </v-icon>
                      {{ curso["área temática primária"] }}
                    </v-chip>

                    <v-chip class="ma-2" color="primary" label>
                      <v-icon left> mdi-clock </v-icon>
                      {{ curso["duração em dias"] }} Dias
                    </v-chip>

                    <v-chip class="ma-2" color="cyan" label text-color="white">
                      <v-icon left> mdi-format-list-bulleted-type </v-icon>
                      {{ curso["carga horária total"] }} Horas
                    </v-chip>
                  </v-card-text>
                </v-card>
              </v-slide-item>
              <v-slide-item>
                <v-card class="ma-2" width="300" height="450">
                  <v-img :src="nextImage()" height="200px"></v-img>
                  <v-card-title class="pb-0">
                    <v-btn>Ver mais cursos</v-btn>
                  </v-card-title>
                  <v-card-subtitle class="mt-2">
                    Pesquise em todos os cursos da UFRJ
                  </v-card-subtitle>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-tab-item>
        </v-tabs-items>
      </div> -->

      <div class="my-12 py-12 ">
        <h1>Atividades e Serviços</h1>
        <p class="subheader">
          Participe de nossas atividades e tenha acesso a diversos serviços
          disponibilizado por nossa universidade.
        </p>
        <div class="navegation">
          <v-tabs v-model="projetosTab" align-with-title>
            <v-tab v-for="area in areas" :key="area">{{ area }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="projetosTab">
            <v-tab-item v-for="area in areas" :key="area" class="my-5">
              <p class="subheader">
                As atividades e serviços relacionados ao tema
                <strong>{{ area }}</strong> abrangem:
              </p>

              <div class="text-right">
                <v-chip
                  v-for="tag in areas_descrição[area]"
                  :key="tag"
                  class="ma-1"
                  color="gray"
                  outlined
                  label
                >
                  {{ tag }}
                </v-chip>
              </div>

              <p class="subheader pt-5">Navegue entre as atividades e serviços abaixo:</p>
              <v-slide-group v-model="slideModel" show-arrows>
                <v-slide-item
                  v-for="(curso, index) in limit(
                    filter(projetos, 'área temática primária', area),
                    4
                  )"
                  :key="'curso' + index"
                >
                  <v-card class="ma-2" width="300" height="450">
                    <v-img :src="nextImage()" height="200px"></v-img>
                    <v-card-title class="pb-0"> {{ curso.nome }} </v-card-title>

                    <v-card-subtitle class="mt-2">
                      {{ curso.coordenador }}
                    </v-card-subtitle>

                    <v-card-text>
                      <v-chip
                        class="ma-2"
                        color="pink"
                        label
                        text-color="white"
                      >
                        <v-icon left> mdi-label </v-icon>
                        {{ curso["área temática primária"] }}
                      </v-chip>

                      <v-chip class="ma-2" color="primary" label>
                        <v-icon left> mdi-clock </v-icon>
                        {{ curso["duração em dias"] }} Dias
                      </v-chip>

                      <v-chip
                        class="ma-2"
                        color="cyan"
                        label
                        text-color="white"
                      >
                        <v-icon left> mdi-format-list-bulleted-type </v-icon>
                        {{ curso["carga horária total"] }} Horas
                      </v-chip>
                    </v-card-text>
                  </v-card>
                </v-slide-item>
                <v-slide-item>
                  <v-card class="ma-2" width="300" height="450">
                    <v-img :src="nextImage()" height="200px"></v-img>
                    <v-card-title class="pb-0">
                      <v-btn>Ver mais cursos</v-btn>
                    </v-card-title>
                    <v-card-subtitle class="mt-2">
                      Pesquise em todos os cursos da UFRJ
                    </v-card-subtitle>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </div>
    <v-container align="center" justify="center">
      <v-btn to="/atividades"> Veja todas as atividades</v-btn>
    </v-container>
      <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Este portal tem como objetivo encurtar as distancias entre alunos, docentes, técnicos administrativos e comunidade externa das ações e serviços disponíveis na Universidade Federal do Rio de Janeiro.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Extensão UFRJ</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-container>
  
</template>


<script>
import json from "../../public/dados.json";

export default {
  name: "Home",

  components: {},

  data() {
    return {
      carouselModel: null,
      slideModel: null,
      cursos: json["SegmentacaoAcaoExtensaoCurso"],
      eventos: json["AcaoExtensaoEvento"],
      programas: json["AcaoExtensaoAcaoExtensaoProgram"],
      projetos: json["AcaoExtensaoProjeto"],
      selected: "eventos",
      cursosTab: 0,
      eventosTab: 0,
      programasTab: 0,
      projetosTab: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      areas: [],
      areas_descrição: {
        Educação: [
          "Educação básica",
          " educação e cidadania",
          " educação à distância",
          " educação continuada",
          " educação de jovens e adultos",
          " educação especial",
          " educação infantil",
          " ensino fundamental",
          " ensino médio",
          " incentivo à leitura",
          " capacitação e qualificação de recursos humanos e de gestores de políticas públicas em educação",
          " cooperação interinstitucional e internacional na área.",
        ],
        Cultura: [
          "Desenvolvimento de cultura",
          " cultura, memória e patrimônio",
          " cultura e memória social",
          " cultura e sociedade",
          " folclore, artesanato e tradições culturais",
          " produção cultural e artística na área de artes plásticas e artes gráficas",
          " produção cultural e artística na área de fotografia, cinema e vídeo",
          " produção cultural e artística nas áreas de música e dança",
          " produção teatral e circense",
          " rádio universitária",
          " capacitação de gestores e políticas públicas no setor cultural",
          " cooperação interinstitucional e cooperação internacional na área",
          " cultura e memória social",
        ],
        "Tecnologia e Produção": [
          "Transferência de tecnologias apropriadas",
          " empreendedorismo",
          " empresas juniores",
          " inovação tecnológica",
          " pólos tecnológicos",
          " capacitação e qualificação de recursos humanos e de gestores de políticas de ciências e tecnologia",
          " cooperação interinstitucional e cooperação internacional na área",
          " direitos de propriedade e patentes",
        ],
        Saúde: [
          "Promoção à saúde e qualificação de vida",
          " atenção a grupos de pessoas com necessidades especiais",
          " atenção a grupos de pessoas com necessidades especiais",
          " atenção integral à mulher",
          " atenção integral à criança",
          " atenção integral à saúde de adultos",
          " atenção integral ao adolescente e ao jovem",
          " capacitação e qualificação de recursos humanos e de gestores de políticas públicas de saúde",
          " cooperação interinstitucional e cooperação internacional na área",
          " desenvolvimento do sistema de saúde",
          " saúde e segurança no trabalho",
          " esporte, lazer e saúde",
          " hospitais e clínicas universitárias",
          "novas endemias e epidemias",
          " saúde da família",
          " uso e dependência de drogas",
        ],
        "Direitos Humanos e Justiça": [
          "Assistência jurídica",
          " capacitação e qualificação de recursos humanos e de gestores de políticas públicas de direitos humanos",
          " cooperação interinstitucional e cooperação internacional na área",
          " direitos de grupos sociais",
          " organizações populares",
          " questão agrária",
        ],
        Comunicação: [
          "Comunicação Social",
          " mídia comunitária",
          " comunicação escrita e eletrônica",
          " produção e difusão de material educativo",
          " televisão universitária",
          " rádio universitária",
          " capacitação e qualificação de recursos humanos e de gestores de políticas públicas de comunicação social",
          " cooperação interinstitucional e cooperação internacional na área",
        ],
        Trabalho: [
          "Reforma agrária e trabalho rural",
          " trabalho e inclusão social",
          " capacitação e qualificação de recursos humanos e de gestores de políticas públicas do trabalho",
          " cooperação interinstitucional e cooperação internacional na área",
          " educação profissional",
          " organização popular para o trabalho",
          " cooperativas populares",
          " questão agrária",
          " saúde e segurança no trabalho",
          " trabalho infantil",
          " turismo e oportunidades de trabalho ",
        ],
        "Meio ambiente": [
          "Preservação e sustentabilidade do meio ambiente",
          " planejamento de sistemas e tecnologias agrícolas sustentáveis",
          " desenvolvimento regional sustentável",
          " sistemas alternativos de produção",
          " sustentabilidade do desenvolvimento urbano e rural",
          " manejo ecológico de insetos-pragas, doenças e plantas espontâneas",
          " sistemas integrados de produção",
          " capacitação e qualificação de recursos humanos e de gestores de políticas públicas de meio ambiente",
          " cooperação interinstitucional e internacional na área de meio ambiente",
          " educação ambiental",
          " gestão de recursos naturais",
          " sistemas integrados para bacias regionais",
        ],
      },
      carouselImages: [
        "Foto - Estudantes.png",
        "Foto - Docentes e tecnicos.png",
        "Foto - Comunidade Externa.png",
      ],
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
  mounted: function () {
    {
      this.areas = Array.from(
        new Set(this.cursos.map((x) => x["área temática primária"]))
      );
    }
  },
  computed: {
    nextImage2() {
      return this.allImages[Math.floor(Math.random() * this.allImages.length)];
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
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  font-size: 1rem !important;
}

.v-application .pt-6 {
  margin-top: 0 !important;
}

.v-card__text,
.v-card__title {
  word-break: normal !important; /* maybe !important  */
}

.navegation {
  border-style: solid;
  border-width: 1px;
  border-color: rgb(200, 200, 200);
}

p.subheader {
  font-size: 1.3rem;
  padding-left: 2rem;
  font-weight: 300;
}
</style>
