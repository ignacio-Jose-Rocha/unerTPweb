import { useState, useEffect } from 'react';
import './form.css';

const AddAlojamiento = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [alojamientoEditando, setAlojamientoEditando] = useState(null);
  const [descripcionEditando, setDescripcionEditando] = useState('');
  const [alojamientos, setAlojamientos] = useState([]);
  const [tituloEditando, setTituloEditando] = useState('');
  const [descripcionEditando1, setDescripcionEditando1] = useState('');
  const [precioPorDiaEditando, setPrecioPorDiaEditando] = useState('');
  const [cantidadDormitorios, setCantidadDormitorios] = useState('');
  const [cantidadBanios, setCantidadBanios] = useState('');
  const [estado, setEstado] = useState('');
  const [tipoAlojamiento, setTipoAlojamiento] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [precioPorDia, setPrecioPorDia] = useState('');
  const [cantidadDormitoriosEditando, setCantidadDormitoriosEditando] = useState('');
  const [cantidadBaniosEditando, setCantidadBaniosEditando] = useState('');
  const [estadoEditando, setEstadoEditando] = useState('');
  const [tipoAlojamientoEditando, setTipoAlojamientoEditando] = useState('');
  const [latitudEditando, setLatitudEditando] = useState('');
  const [longitudEditando, setLongitudEditando] = useState('');
  const [descripcion1, setDescripcion1] = useState('');
  const [servicios, setServicios] = useState([]);
  const [nombreEditando, setNombreEditando] = useState('');
  const [servicioEditando, setServicioEditando] = useState(null);
  const [idAlojamiento, setIdAlojamiento] = useState(null);
  const [idServicio, setIdServicio] = useState(null);
  const [alojamientosServicios, setAlojamientosServicios] = useState([]);
  const [alojamientoServicioEditando, setAlojamientoServicioEditando] = useState(null);
  const [idAlojamientoEditando, setIdAlojamientoEditando] = useState(null);
  const [idServicioEditando, setIdServicioEditando] = useState(null);
  const [imagen, setImagen] = useState('');
  const [idImagen, setIdImagen] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [imagenEditando, setImagenEditando] = useState(null);
const [rutaArchivoEditando, setRutaArchivoEditando] = useState('');
const [idImagenEditando, setIdImagenEditando] = useState('');
const  [descripcion2, setDescripcion2] = useState('');
  
  {/* imagenes */ }
  const enviarNuevaImagen = async (e) => {
    e.preventDefault();
    const newImagen = {
      idImagen: idImagen,
      RutaArchivo: imagen
    };
    try {
      const response = await fetch('http://localhost:3000/imagen/createImagen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newImagen)
      });
      if (response.ok) {
        alert('Imagen agregada');
      } else {
        alert('Error al agregar la imagen');
      }
    } catch (error) {
      alert('Error al establecer la imagen.');
    }
  }
  const obtenerImagenes = async () => {
    try {
      const response = await fetch('http://localhost:3000/imagen/getAllImagenes');
      if (response.ok) {
        const imagenes = await response.json();
        setImagenes(imagenes);
      } else {
        alert('Error al obtener las imágenes');
      }
    } catch (error) {
      alert('Error al obtener las imágenes.');
    }
  }
  function eliminarImagen(id) {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta imagen?')) {
      fetch(`http://localhost:3000/imagen/deleteImagen/${id}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al eliminar la imagen');
        }
        return response.json();
      })
      .then(data => {
        alert('Imagen eliminada con éxito:', data);
      })
      .catch(error => {
        alert('Error:', error);
      });
    }
  }
  const iniciarEdicionImagen = (imagen) => {
    setImagenEditando(imagen.idImagen);
    setIdImagenEditando(imagen.idImagen);
    setRutaArchivoEditando(imagen.RutaArchivo);
  };
  const confirmarEdicionImagen = async () => {
    const imagenActualizada = {
      idImagen: idImagenEditando,
      RutaArchivo: rutaArchivoEditando,
    };
    try {
      const response = await fetch(`http://localhost:3000/imagen/updateImagen/${imagenEditando}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(imagenActualizada)
      });
      if (response.ok) {
        alert('Imagen actualizada');
        obtenerImagenes();
      } else {
        alert('Error al actualizar la imagen');
      }
    } catch (error) {
      console.error('Error al actualizar la imagen', error);
    }
    setImagenEditando(null);
  };
  {/* alojamiento servicios*/ }
  const enviarNuevoAlojamientoServicio = async (e, idAlojamiento, idServicio) => {
    e.preventDefault();
    const newAlojamientoServicio = {
      idAlojamiento: idAlojamiento,
      idServicio: idServicio
    };
    try {
      const response = await fetch('http://localhost:3000/alojamientosServicios/createAlojamientoServicio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAlojamientoServicio)
      });
      if (response.ok) {
        alert('Servicio de alojamiento agregado');
      } else {
        alert('Error al agregar el servicio de alojamiento');
      }
    } catch (error) {
      alert('Error al establecer el servicio de alojamiento.');
    }
  }
  const obtenerAlojamientosServicios = async () => {
    try {
      const response = await fetch('http://localhost:3000/alojamientosServicios/getAllAlojamientoServicios');
      if (response.ok) {
        const data = await response.json();
        setAlojamientosServicios(data);
      } else {
        alert('Error al obtener los alojamientos');
      }
    } catch (error) {
      alert('Error al obtener los alojamientos');
    }
  }
  const eliminarAlojamientoServicio = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/alojamientosServicios/deleteAlojamientoServicio/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        alert('Alojamiento Servicio eliminado');
        obtenerAlojamientosServicios();
      } else {
        alert('Error al eliminar el alojamiento servicio');
      }
    } catch (error) {
      console.error('Error al eliminar el alojamiento servicio', error);
    }
  }
  const iniciarEdicionAlojamientoServicio = (alojamientoServicio) => {
    setAlojamientoServicioEditando(alojamientoServicio.idAlojamientoServicio);
    setIdAlojamientoEditando(alojamientoServicio.idAlojamiento);
    setIdServicioEditando(alojamientoServicio.idServicio);
  };
  const confirmarEdicionAlojamientoServicio = async () => {
    const alojamientoServicioActualizado = {
      idAlojamiento: idAlojamientoEditando,
      idServicio: idServicioEditando,
    };
    try {
      const response = await fetch(`http://localhost:3000/alojamientosServicios/updateAlojamientoServicio/${alojamientoServicioEditando}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(alojamientoServicioActualizado)
      });
      if (response.ok) {
        alert('Alojamiento Servicio actualizado');
        obtenerAlojamientosServicios();
      } else {
        alert('Error al actualizar el alojamiento servicio');
      }
    } catch (error) {
      console.error('Error al actualizar el alojamiento servicio', error);
    }
    setAlojamientoServicioEditando(null);
  };
  {/* servicios */ }
  const enviarNuevoServicio = async (e) => {
    e.preventDefault();
    const newServicio = {
      Nombre: descripcion1
    };
    try {
      const response = await fetch('http://localhost:3000/servicio/createServicio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newServicio)
      });
      if (response.ok) {
        alert('Servicio agregado');
      } else {
        alert('Error al agregar el servicio');
      }
    } catch (error) {
      alert('Error al establecer el servicio.');
    }
  };
  const MostrarServicios = async () => {
    try {
      const response = await fetch('http://localhost:3000/servicio/getAllServicios');
      if (response.ok) {
        const data = await response.json();
        setServicios(data);
      } else {
        alert('Error al obtener los servicios');
      }
    } catch (error) {
      console.error('Error al obtener los servicios', error);
    }
  };
  const eliminarServicios = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/servicio/deleteServicio/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        alert('Servicio eliminado');
        MostrarServicios();
      } else {
        alert('Error al eliminar el servicio');
      }
    } catch (error) {
      console.error('Error al eliminar el servicio', error);
    }
  }
  const iniciarEdicionServicio = (servicio) => {
    setServicioEditando(servicio.idServicio);
    setNombreEditando(servicio.Nombre);
  };
  const confirmarEdicionServicio = async () => {
    const servicioActualizado = {
      Nombre: nombreEditando,
    };
    try {
      const response = await fetch(`http://localhost:3000/servicio/updateServicio/${servicioEditando}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(servicioActualizado)
      });
      if (response.ok) {
        alert('Servicio actualizado');
        MostrarServicios();
      } else {
        alert('Error al actualizar el servicio');
      }
    } catch (error) {
      console.error('Error al actualizar el servicio', error);
    }
    setServicioEditando(null);
  };

  //alojamiento
  const enviarNuevoAlojamiento = async (event) => {
    event.preventDefault();
    const idAlojamiento = Math.floor(Math.random() * 1000000);

    try {
      const response = await fetch('http://localhost:3000/alojamiento/createAlojamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idAlojamiento: idAlojamiento,
        
          titulo: titulo,
          descripcion: descripcion,
          latitud: latitud,
          longitud: longitud,
          precioPorDia: precioPorDia, cantidadDormitorios: cantidadDormitorios,
          cantidadBanios: cantidadBanios,
          estado: estado,
          tipoAlojamiento: tipoAlojamiento
        })
      });

      if (response.ok) {
        alert('Alojamiento creado con éxito');
        setTitulo('');
        setDescripcion('');
        obtenerAlojamientos();
      } else {
        alert('Error al crear alojamiento');
      }
    } catch (error) {
      console.error('Error al crear alojamiento', error);
    }
  };
  const obtenerAlojamientos = async () => {
    try {
      const response = await fetch('http://localhost:3000/alojamiento/getAlojamientos');
      if (response.ok) {
        const data = await response.json();
        setAlojamientos(data);
      } else {
        alert('Error al obtener los alojamientos');
      }
    } catch (error) {
      console.error('Error al obtener los alojamientos', error);
    }
  };
  const eliminarAlojamientoPorId = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/alojamiento/deleteAlojamiento/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        alert('Alojamiento eliminado');
        obtenerAlojamientos();
      } else {
        alert('Error al eliminar el alojamiento');
      }
    } catch (error) {
      console.error('Error al eliminar el alojamiento', error);
    }
  };
  const iniciarEdicion1 = (alojamiento) => {
    setAlojamientoEditando(alojamiento.idAlojamiento);
    setTituloEditando(alojamiento.Titulo);
    setDescripcionEditando1(alojamiento.Descripcion);
    setPrecioPorDiaEditando(alojamiento.PrecioPorDia);
    setCantidadDormitoriosEditando(alojamiento.CantidadDormitorios);
    setCantidadBaniosEditando(alojamiento.CantidadBanios);
    setEstadoEditando(alojamiento.Estado);
    setTipoAlojamientoEditando(alojamiento.TipoAlojamiento);
    setLatitudEditando(alojamiento.latitud);
    setLongitudEditando(alojamiento.longitud);
  };
  const confirmarEdicion1 = async () => {
    const alojamientoActualizado = {
      Titulo: tituloEditando,
      Descripcion: descripcionEditando1,
      PrecioPorDia: precioPorDiaEditando,
      CantidadDormitorios: cantidadDormitoriosEditando,
      CantidadBanios: cantidadBaniosEditando,
      Estado: estadoEditando,
      TipoAlojamiento: tipoAlojamientoEditando,
      latitud: latitudEditando,
      longitud: longitudEditando
    };
    try {
      const response = await fetch(`http://localhost:3000/alojamiento/putAlojamiento/${alojamientoEditando}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(alojamientoActualizado)
      });
      if (response.ok) {
        alert('Alojamiento actualizado');
        obtenerAlojamientos();
      } else {
        alert('Error al actualizar el alojamiento');
      }
    } catch (error) {
      console.error('Error al actualizar el alojamiento', error);
    }
    setAlojamientoEditando(null);
  };

  //tipo alojamiento
  const enviar = async (e) => {
    e.preventDefault();
    const newAlojamiento = {
      Descripcion: descripcion2
    };
    try {
      const response = await fetch('http://localhost:3000/tiposAlojamiento/createTipoAlojamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAlojamiento)
      });
      if (response.ok) {
        alert('alojamiento agregado');
      } else {
        alert('error al agregar el alojamiento');
      }
    } catch (error) {
      alert('error al establecer el servicio.');
    }
  };
  const obtenerTiposAlojamiento = async () => {
    try {
      const response = await fetch('http://localhost:3000/tiposAlojamiento/getTiposAlojamiento');
      if (response.ok) {
        const data = await response.json();
        setTiposAlojamiento(data);
      } else {
        alert('error al obtener los tipos de alojamiento');
      }
    } catch (error) {
      alert('error al establecer el servicio.');
    }
  };
  const eliminarAlojamiento = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/tiposAlojamiento/deleteTipoAlojamiento/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        alert('Alojamiento eliminado');
        obtenerTiposAlojamiento();
      } else {
        alert('Error al eliminar el alojamiento');
      }
    } catch (error) {
      alert('Error al establecer el servicio.');
    }
  };
  const iniciarEdicion = (tipo) => {
    setAlojamientoEditando(tipo.idTipoAlojamiento);
    setDescripcionEditando(tipo.Descripcion);
  };
  const confirmarEdicion = async () => {
    const alojamientoActualizado = {
      Descripcion: descripcionEditando
    };
    try {
      const response = await fetch(`http://localhost:3000/tiposAlojamiento/putTipoAlojamiento/${alojamientoEditando}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(alojamientoActualizado)
      });
      if (response.ok) {
        alert('Alojamiento actualizado');
        obtenerTiposAlojamiento();
      } else {
        alert('Error al actualizar el alojamiento');
      }
    } catch (error) {
      alert('Error al establecer el servicio.');
    }
    setAlojamientoEditando(null);
  };
  useEffect(() => {
    obtenerTiposAlojamiento();
    obtenerAlojamientos();
    MostrarServicios();
    obtenerAlojamientos();
    obtenerAlojamientosServicios();
    obtenerImagenes();
  }, []);
  return (
    <div className="contenedorAddAlojamientos">
      <h2>agregar alojamiento</h2>
      <p>ingresa los datos del alojamiento</p>
      {/* alojamiento */}
      <form onSubmit={enviarNuevoAlojamiento}>
        <div>
          <label htmlFor="titulo">Titulo: </label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="precioPorDia">Precio por día: </label>
          <input
            type="number"
            id="precioPorDia"
            value={precioPorDia}
            onChange={e => setPrecioPorDia(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripcion: </label>
          <input
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="latitud">Latitud: </label>
          <input
            type="text"
            id="latitud"
            value={latitud}
            onChange={e => setLatitud(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="longitud">Longitud: </label>
          <input
            type="text"
            id="longitud"
            value={longitud}
            onChange={e => setLongitud(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cantidadDormitorios">Cantidad de Dormitorios: </label>
          <input
            type="number"
            id="cantidadDormitorios"
            value={cantidadDormitorios}
            onChange={e => setCantidadDormitorios(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cantidadBanios">Cantidad de Baños: </label>
          <input
            type="number"
            id="cantidadBanios"
            value={cantidadBanios}
            onChange={e => setCantidadBanios(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="estado">Estado: </label>
          <input
            type="text"
            id="estado"
            value={estado}
            onChange={e => setEstado(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tipoAlojamiento">Tipo de Alojamiento: </label>
          <input
            type="text"
            id="tipoAlojamiento"
            value={tipoAlojamiento}
            onChange={e => setTipoAlojamiento(e.target.value)}
          />
        </div>
        <button type="submit">enviar</button>
      </form>
      {/* tipo de alojamiento */}
      <form onSubmit={enviar}>
  <div>
    <label htmlFor="descripcionAlojamiento">Descripcion: </label>
    <input
      type="text"
      id="descripcionAlojamiento"
      value={descripcion2}
      onChange={e => setDescripcion2(e.target.value)}
    />
  </div>
  <button type="submit">enviar</button>
</form>
      { /* servicios */}
      <form onSubmit={enviarNuevoServicio}>
        <div>
          <label htmlFor="descripcionServicio">Descripción del Servicio: </label>
          <input
            type="text"
            id="descripcionServicio"
            value={descripcion1}
            onChange={e => setDescripcion1(e.target.value)}
          />
        </div>
        <button type="submit">Agregar Servicio</button>
      </form>
      {/* alojamiento servicios */}
      <form onSubmit={(e) => enviarNuevoAlojamientoServicio(e, parseInt(idAlojamiento), parseInt(idServicio))}>
  <select value={idAlojamiento} onChange={(e) => setIdAlojamiento(e.target.value)}>
    <option value="">Selecciona un alojamiento</option>
    {alojamientos.map((alojamiento, index) => (
      <option key={index} value={alojamiento.id}>
        {alojamiento.idAlojamiento} {alojamiento.Titulo}
      </option>
    ))}
  </select>
  <select value={idServicio} onChange={(e) => setIdServicio(e.target.value)}>
    <option value="">Selecciona un servicio</option>
    {servicios.map((servicio) => (
      <option key={servicio.idServicio} value={servicio.id}>
        {servicio.idServicio} {servicio.Nombre}
      </option>
    ))}
  </select>
  <button type="submit">Enviar</button>
</form>
      {/* imagenes */}
      <form onSubmit={enviarNuevaImagen}>
    <div>
      <label htmlFor="imagen">Imagen: </label>
      <input
        type="text"
        id="imagen"
        value={imagen}
        onChange={e => setImagen(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="idImagen">ID de la Imagen: </label>
      <input
        type="text"
        id="idImagen"
        value={idImagen}
        onChange={e => setIdImagen(e.target.value)}
      />
    </div>
    <button type="submit">agregar imagen</button>
  </form>

      {/*------------- */}
      {/* alojamiento */}
      <h2>Lista de Alojamientos</h2>
      <ul>
        {alojamientos.map((alojamiento, index) => {
          return (
            <li key={index}>
              {alojamientoEditando === alojamiento.idAlojamiento ? (
                <>
                  <input
                    type="text"
                    value={tituloEditando}
                    onChange={e => setTituloEditando(e.target.value)}
                  />
                  <input
                    type="text"
                    value={descripcionEditando1}
                    onChange={e => setDescripcionEditando1(e.target.value)}
                  />
                  <input
                    type="number"
                    value={precioPorDiaEditando}
                    onChange={e => setPrecioPorDiaEditando(e.target.value)}
                  />
                  <input
                    type="number"
                    value={cantidadDormitoriosEditando}
                    onChange={e => setCantidadDormitoriosEditando(e.target.value)}
                  />
                  <input
                    type="number"
                    value={cantidadBaniosEditando}
                    onChange={e => setCantidadBaniosEditando(e.target.value)}
                  />
                  <input
                    type="text"
                    value={estadoEditando}
                    onChange={e => setEstadoEditando(e.target.value)}
                  />
                  <input
                    type="text"
                    value={tipoAlojamientoEditando}
                    onChange={e => setTipoAlojamientoEditando(e.target.value)}
                  />
                  <input
                    type="text"
                    value={latitudEditando}
                    onChange={e => setLatitudEditando(e.target.value)}
                  />
                  <input
                    type="text"
                    value={longitudEditando}
                    onChange={e => setLongitudEditando(e.target.value)}
                  />
                  <button onClick={confirmarEdicion1}>Confirmar</button>
                </>
              ) : (
                <>
                  {alojamiento.Titulo}, {alojamiento.Descripcion} {alojamiento.latitud} {alojamiento.longitud}  {alojamiento.PrecioPorDia}
                  {alojamiento.CantidadDormitorios} {alojamiento.CantidadBanios} {alojamiento.Estado} {alojamiento.TipoAlojamiento} {alojamiento.idTipoAlojamiento}
                  <button onClick={() => iniciarEdicion1(alojamiento)}>Editar</button>
                  <button onClick={() => eliminarAlojamientoPorId(alojamiento.idAlojamiento)}>Eliminar</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
      {/* tipos de alojamiento */}
      <h2>Lista de Tipos de Alojamiento</h2>
      <ul>
        {tiposAlojamiento.map((tipo, index) => {
          return (
            <li key={index} className="datos-negros">
              {alojamientoEditando === tipo.idTipoAlojamiento ? (
                <>
                  <input
                    type="text"
                    value={descripcionEditando}
                    onChange={e => setDescripcionEditando(e.target.value)}
                  />
                  <button onClick={confirmarEdicion}>Confirmar</button>
                </>
              ) : (
                <>
                  {tipo.Descripcion}
                  <button onClick={() => iniciarEdicion(tipo)}>Editar</button>
                  <button onClick={() => eliminarAlojamiento(tipo.idTipoAlojamiento)}>Eliminar</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
      {/* alojamiento Servicio */}
      <h2>Lista de Alojamientos servicios</h2>
<ul>
  {alojamientosServicios.map((alojamientoServicio, index) => {
    const alojamientoCorrespondiente = alojamientos.find(alojamiento => alojamiento.idAlojamiento === alojamientoServicio.idAlojamiento);
    const servicioCorrespondiente = servicios.find(servicio => servicio.idServicio === alojamientoServicio.idServicio);

    return (
      <li key={index}>
        {alojamientoServicioEditando === alojamientoServicio.idAlojamientoServicio ? (
          <>
            <label>
              Alojamiento:
              <select value={idAlojamientoEditando} onChange={e => setIdAlojamientoEditando(e.target.value)}>
                {alojamientos.map((alojamiento) => (
                  <option key={alojamiento.idAlojamiento} value={alojamiento.idAlojamiento}>
                    {alojamiento.Titulo}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Servicio:
              <select value={idServicioEditando} onChange={e => setIdServicioEditando(e.target.value)}>
                {servicios.map((servicio) => (
                  <option key={servicio.idServicio} value={servicio.idServicio}>
                    {servicio.Nombre}
                  </option>
                ))}
              </select>
            </label>
            <button onClick={confirmarEdicionAlojamientoServicio}>Confirmar</button>
          </>
        ) : (
          <>
            {alojamientoCorrespondiente ? alojamientoCorrespondiente.Titulo : 'Alojamiento no encontrado'} {servicioCorrespondiente ? servicioCorrespondiente.Nombre : 'Servicio no encontrado'}
            <button onClick={() => iniciarEdicionAlojamientoServicio(alojamientoServicio)}>Editar</button>
            <button onClick={() => eliminarAlojamientoServicio(alojamientoServicio.idAlojamientoServicio)}>Eliminar</button>
          </>
        )}
      </li>
    );
  })}
</ul>
      {/* Servicios */}
      <h2>Servicios</h2>
      {servicios.map((servicio, index) => {
        return (
          <li key={index}>
            {servicioEditando === servicio.idServicio ? (
              <>
                <input
                  type="text"
                  value={nombreEditando}
                  onChange={e => setNombreEditando(e.target.value)}
                />
                <button onClick={confirmarEdicionServicio}>Confirmar</button>
              </>
            ) : (
              <>
                {servicio.Nombre}
                <button onClick={() => iniciarEdicionServicio(servicio)}>Editar</button>
                <button onClick={() => eliminarServicios(servicio.idServicio)}>Eliminar</button>
              </>
            )}
          </li>
        );
      })}
      {/* imagenes */}
      <h2>imagenes</h2>
<div>
  {imagenes.map((imagen, index) => (
    <div key={index}>
      <img src={imagen.RutaArchivo} alt={`ruta Imagen ${imagen.RutaArchivo} idImagen ${imagen.idImagen}`} />
      {imagenEditando === imagen.idImagen ? (
        <div>
          <input
            type="text"
            value={idImagenEditando}
            onChange={e => setIdImagenEditando(e.target.value)}
            placeholder="ID de la imagen"
          />
          <input
            type="text"
            value={rutaArchivoEditando}
            onChange={e => setRutaArchivoEditando(e.target.value)}
            placeholder="Ruta del archivo"
          />
          <button onClick={confirmarEdicionImagen}>Confirmar Edición</button>
        </div>
      ) : (
        <button onClick={() => iniciarEdicionImagen(imagen)}>Editar</button>
      )}
      <button onClick={() => eliminarImagen(imagen.idImagen)}>Eliminar</button>
    </div>
  ))}
</div>
</div>
  );
};

export default AddAlojamiento;