# 📌 Permisos del sistema

Este documento lista los permisos utilizados en el sistema y su propósito.

## 🛠️ Estructura de permisos

Los permisos siguen la estructura:  
**`<recurso>_<acción>`**  
Ejemplo: `user_create`, `role_delete`.

---

## 📜 Lista de permisos

### 👤 Usuarios (`user`)

| Permiso       |
| ------------- |
| `user_create` |
| `user_read`   |
| `user_update` |
| `user_delete` |

### 📝 Roles (`roles`)

| Permiso       |
| ------------- |
| `role_create` |
| `role_read`   |
| `role_update` |
| `role_delete` |

### 📝 Permisos (`permission`)

| Permiso             |
| ------------------- |
| `permission_create` |
| `permission_read`   |
| `permission_update` |
| `permission_delete` |

---

## 🚀 Consideraciones

- Los permisos **no deben modificarse en producción.**
- Los roles pueden gestionar dinámicamente los permisos.
- Los permisos solo cambian si se agrega una nueva funcionalidad.
