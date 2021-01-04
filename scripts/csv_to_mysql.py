import csv
import pymysql
from decouple import config

mydb = pymysql.connect(config("DATABASE_HOST"),config("DATABASE_USER"),config("PASSWORD_DATABASE_USER"),config("DATABASE_NAME") )
cursor = mydb.cursor()
csv_data = csv.reader(open('tabla_de_datos.csv'))
for row in csv_data:
    cursor.execute('INSERT INTO datos(codigo, \
          nombre, apellidoPaterno,apellidoMaterno, fechaNaturalizacion,\
          fechaNacimiento, nacionalidad,fechaContrato, fechaBaja, CUIP, \
          folio, rfc, claveife, curp, imss, nombre_completo, municipio, entidad_federativa, modo_nacionalidad, colonia)' \
          'VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)', 
          row)
#close the connection to the database.
mydb.commit()
cursor.close()
print("Done")

