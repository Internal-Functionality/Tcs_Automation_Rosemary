import { test, expect } from '@playwright/test';

// TC1: Verificar campo cargo solo permita caracteres válidos
test('AQARius - Verificar que el campo cargo solo permita caracteres válidos', async ({ page }) => {
  // Paso 1: Ir a la página donde está el formulario de experiencia / cargo
  await page.goto('https://front-fixer-stories.onrender.com/fixers');

  // TODO: si el campo "cargo" está en otra ruta, cambia la URL de arriba

  // Paso 2: localizar el campo "cargo"
  // Ajusta el selector al real (id, name, placeholder o label)
  const campoCargo = page.locator('input[name="cargo"]');

  // Asegurarse de que el campo está visible
  await expect(campoCargo).toBeVisible();

  // Paso 3: ingresar un valor válido
  await campoCargo.fill('Desarrollador Frontend');
  await expect(campoCargo).toHaveValue('Desarrollador Frontend');

  // Paso 4: intentar ingresar caracteres NO válidos
  await campoCargo.fill('@@@@@@@');

  // Aquí tienes DOS opciones según cómo se comporte la app.
  // Opción A: el campo NO acepta esos caracteres (se limpia o se ignoran)
  // await expect(campoCargo).not.toHaveValue('@@@@@@@');

  // Opción B: se muestra un mensaje de error de validación
  // Ajusta el texto del mensaje según tu UI real
  // const mensajeError = page.getByText('Cargo inválido');
  // await expect(mensajeError).toBeVisible();
});

// TC2: Verificar que el icono "agregar experiencia" redirija al formulario
test('AQARius - Verificar que el icono agregar experiencia redirija al formulario', async ({ page }) => {
  // Paso 1: Ir a la página donde está el icono "agregar experiencia"
  await page.goto('https://front-fixer-stories.onrender.com/fixers');

  // TODO: si el icono está en otra ruta, cambia la URL de arriba

  // Paso 2: localizar y hacer clic en el icono / botón "agregar experiencia"
  // Ajusta el selector a tu DOM real (puede ser un botón, enlace, icono con aria-label, etc.)
  const botonAgregarExperiencia = page.locator('button:has-text("Agregar experiencia")');
  await expect(botonAgregarExperiencia).toBeVisible();
  await botonAgregarExperiencia.click();

  // Paso 3: verificar que el usuario fue redirigido al formulario
  // Puedes validar por:
  //  - la URL
  //  - el título del formulario
  //  - un campo obligatorio del formulario

  // Ejemplo 1: verificar por URL (ajusta el pathname esperado)
  // await expect(page).toHaveURL(/.*experiencia\/nuevo/);

  // Ejemplo 2: verificar por título del formulario
  const tituloFormulario = page.getByText('Agregar experiencia');
  await expect(tituloFormulario).toBeVisible();

  // Ejemplo 3 (opcional): verificar que el campo cargo del formulario esté visible
  // const campoCargoFormulario = page.locator('input[name="cargo"]');
  // await expect(campoCargoFormulario).toBeVisible();
});
