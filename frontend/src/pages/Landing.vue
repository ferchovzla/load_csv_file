<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg8.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">This is our great Load .csv App</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Tabla de Datos</h2>
                    
        <template>
        
          <v-simple-table>
            <thead>
              <tr>
                <th class="primary--text">
                  N°
                </th>         
                <th class="primary--text">
                  Codigo
                </th>                              
                <th class="primary--text">
                  Nombre
                </th>
                <th class="text-left primary--text">
                  Fecha Naturalizacion
                </th>
                <th class="text-left primary--text">
                  Fecha Nacimiento
                </th>
                <th class="text-left primary--text">
                  Nacionalidad
                </th>
                <th class="text-left primary--text">
                  Modo Nacionalidad
                </th>
                <th class="text-left primary--text">
                  Fecha Contrato
                </th>
                <th class="text-left primary--text">
                  Fecha Baja
                </th>
                <th class="text-left primary--text">
                  CUIP
                </th>
                <th class="text-left primary--text">
                  Folio
                </th>
                <th class="text-left primary--text">
                  RFC
                </th>
                <th class="text-left primary--text">
                  Clave Ife
                </th>
                <th class="text-left primary--text">
                  CURP
                </th>
                <th class="text-left primary--text">
                  IMSS
                </th>
                <th class="text-left primary--text">
                  Municipio
                </th>
                <th class="text-left primary--text">
                  Entidad Federativa
                </th>
                <th class="text-left primary--text">
                  Colonia
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(item, index) in datos"
                :key="index"
              >
                <td><b>{{ index+1 }}</b></td>
                <td><b>{{ item.codigo }}</b></td>
                <td>{{ item.nombre_completo }}</td>
                <td>{{ item.fechaNaturalizacion }}</td>
                <td>{{ item.fechaNacimiento }}</td>
                <td>{{ item.nacionalidad }}</td>                
                <td>{{ item.fechaContrato }}</td> 
                <td>{{ item.fechaBaja }}</td> 
                <td>{{ item.CUIP }}</td> 
                <td>{{ item.folio }}</td> 
                <td>{{ item.rfc }}</td> 
                <td>{{ item.claveife }}</td> 
                <td>{{ item.curp }}</td> 
                <td>{{ item.imss }}</td> 
                <td>{{ item.municipio }}</td>
                <td>{{ item.entidad_federativa }}</td>
                <td>{{ item.modo_nacionalidad }}</td>
                <td>{{ item.colonia }}</td>
              </tr>
            </tbody>
          </v-simple-table>
      </template>

          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Here is our team</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/avatar.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Romina Hadid</h4>
                <p class="category text-primary">Model</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-facebook-square"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/ryan.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Ryan Tompson</h4>
                <p class="category text-primary">Designer</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/eva.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Eva Jenner</h4>
                <p class="category text-primary">Fashion</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-google-plus"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-youtube"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  data() {
    return {      
      csv: '',
      file: '',
      datos: [],
    };
  },
  mounted () {
      this.getDatos ()
  },
  methods: {
   /**
       * @method getScanUrls
       * @description blah blah
       * @let url blah blah.
       */
      getDatos () {
        const url =  'http://localhost:4000/api/user/'
        axios.get(url)
          .then((response) => {
            this.datos = response.data.data.rows
          })
      },
  },
};
</script>
<style>
  tbody tr:nth-of-type(odd) {
    background-color: rgba(236, 237, 237);
  }

  tbody tr:nth-of-type(even) {
    background-color: rgb(250 ,250, 250);
  }

  .v-data-table-header {
    background-color: rgba(182, 183, 187);
    color: white;
  }

  .v-data-footer {
    background-color: rgb(250 ,250, 250);
  }

  .theme--light.v-data-table thead tr th {
    color: white;
  }
</style>
