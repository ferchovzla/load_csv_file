module.exports = (sequelize, DataTypes) => {
    const datos = sequelize.define("datos", {
      codigo: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING
      },
      apellidoPaterno: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      apellidoMaterno: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      fechaNaturalizacion: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      fechaNacimiento: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      nacionalidad: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      fechaContrato :{
        type: DataTypes.STRING,
        defaultValue: ""
      },
      fechaBaja: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      CUIP: {
        type: DataTypes.STRING,
      },
      folio: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      rfc: {
        type: DataTypes.TEXT,
        defaultValue: ""
      },
      claveife: {
        type: DataTypes.TEXT,
        defaultValue: ""
      },
      curp: {
        type: DataTypes.TEXT,
        defaultValue: ""
      },
      imss: {
        type: DataTypes.TEXT,
        defaultValue: ""
      },
      nombre_completo: {
        type: DataTypes.STRING,
        defaultValue: ""
      },
      municipio: {
        type: DataTypes.TEXT,
        defaultValue: ""
      },
      entidad_federativa: {
        type: DataTypes.TEXT,
        defaultValue: ""
      },
      modo_nacionalidad: {
        type: DataTypes.TEXT,
        defaultValue: ""
      },
      colonia: {
        type: DataTypes.TEXT,
        defaultValue: ""
      }
    });

    return datos;
  };