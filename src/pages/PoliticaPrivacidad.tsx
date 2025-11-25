export function PoliticaPrivacidad() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F7F3E9' }}>
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
          Política de Privacidad
        </h1>
        <p className="text-sm mb-8" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
          Última actualización: 25 de noviembre de 2025
        </p>

        <div className="space-y-8" style={{ fontFamily: 'Inter, sans-serif', color: '#333333' }}>
          {/* Introduction */}
          <section>
            <p className="mb-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              En FoodSaver, nos comprometemos a proteger tu privacidad y tus datos personales. Esta Política de Privacidad explica qué información recopilamos, cómo la usamos, y tus derechos respecto a ella.
            </p>
            <p style={{ color: '#777777', lineHeight: '1.8' }}>
              Al usar FoodSaver, aceptas las prácticas descritas en esta política. Te recomendamos leerla detenidamente.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              1. Información que Recopilamos
            </h2>
            <p className="mb-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              <strong>1.1 Información que nos proporcionas directamente:</strong>
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: '#777777', lineHeight: '1.8' }}>
              <li>Nombre completo y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Ubicación (cuando buscas negocios cercanos)</li>
              <li>Información de pago (procesada por terceros seguros)</li>
              <li>Foto de perfil (opcional)</li>
              <li>Reseñas y calificaciones que publicas</li>
            </ul>

            <p className="mb-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              <strong>1.2 Información que recopilamos automáticamente:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: '#777777', lineHeight: '1.8' }}>
              <li>Dirección IP y ubicación geográfica aproximada</li>
              <li>Tipo de dispositivo, sistema operativo y navegador</li>
              <li>Páginas visitadas y acciones realizadas en la app</li>
              <li>Fecha y hora de acceso</li>
              <li>Historial de reservas y transacciones</li>
              <li>Preferencias y configuraciones de la cuenta</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              2. Cómo Usamos tu Información
            </h2>
            <p className="mb-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: '#777777', lineHeight: '1.8' }}>
              <li><strong>Proporcionar el servicio:</strong> Procesar reservas, pagos y facilitar la recogida de alimentos</li>
              <li><strong>Personalizar tu experiencia:</strong> Mostrar negocios cercanos y recomendaciones relevantes</li>
              <li><strong>Comunicarnos contigo:</strong> Enviar confirmaciones, recordatorios y notificaciones importantes</li>
              <li><strong>Mejorar nuestros servicios:</strong> Analizar el uso de la plataforma y realizar mejoras</li>
              <li><strong>Seguridad:</strong> Detectar fraudes, prevenir abusos y proteger a nuestros usuarios</li>
              <li><strong>Marketing:</strong> Enviarte ofertas y promociones (puedes darte de baja en cualquier momento)</li>
              <li><strong>Cumplir con la ley:</strong> Responder a requerimientos legales y resolver disputas</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              3. Compartir tu Información
            </h2>
            <p className="mb-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              <strong>3.1 Con negocios asociados:</strong> Compartimos tu nombre y detalles de la reserva con el negocio donde realizas un pedido para que puedan prepararlo y entregarlo.
            </p>
            <p className="mb-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              <strong>3.2 Con proveedores de servicios:</strong> Trabajamos con terceros de confianza que nos ayudan a operar la plataforma:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: '#777777', lineHeight: '1.8' }}>
              <li>Procesadores de pagos (ej. Stripe, PayPal)</li>
              <li>Servicios de hosting y almacenamiento en la nube</li>
              <li>Herramientas de análisis y marketing</li>
              <li>Servicios de atención al cliente</li>
            </ul>
            <p className="mb-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              <strong>3.3 Por razones legales:</strong> Podemos divulgar tu información si es requerido por ley, orden judicial, o para proteger nuestros derechos legales.
            </p>
            <p style={{ color: '#777777', lineHeight: '1.8' }}>
              <strong>3.4 Nunca vendemos tus datos:</strong> No vendemos, alquilamos ni intercambiamos tu información personal con terceros para fines de marketing.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              4. Cookies y Tecnologías Similares
            </h2>
            <p className="mb-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              Utilizamos cookies y tecnologías similares para:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: '#777777', lineHeight: '1.8' }}>
              <li>Mantener tu sesión activa</li>
              <li>Recordar tus preferencias</li>
              <li>Analizar el tráfico y el uso de la plataforma</li>
              <li>Personalizar contenido y publicidad</li>
            </ul>
            <p style={{ color: '#777777', lineHeight: '1.8' }}>
              Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades de FoodSaver.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              5. Seguridad de tus Datos
            </h2>
            <p className="mb-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: '#777777', lineHeight: '1.8' }}>
              <li>Cifrado SSL/TLS para todas las transmisiones de datos</li>
              <li>Almacenamiento seguro en servidores protegidos</li>
              <li>Acceso limitado a datos personales solo por personal autorizado</li>
              <li>Monitoreo regular de vulnerabilidades de seguridad</li>
              <li>Autenticación de dos factores disponible</li>
            </ul>
            <p style={{ color: '#777777', lineHeight: '1.8' }}>
              Sin embargo, ningún sistema es 100% seguro. Te recomendamos usar contraseñas fuertes y no compartir tus credenciales.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              6. Retención de Datos
            </h2>
            <p style={{ color: '#777777', lineHeight: '1.8' }}>
              Conservamos tu información personal mientras tu cuenta esté activa o según sea necesario para proporcionarte servicios. Puedes solicitar la eliminación de tu cuenta en cualquier momento. Después de la eliminación, conservaremos cierta información durante el tiempo requerido por ley o para fines legítimos de negocio (ej. prevención de fraudes, resolución de disputas).
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              7. Tus Derechos
            </h2>
            <p className="mb-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              De acuerdo con la Ley de Protección de Datos Personales del Perú (Ley N° 29733), tienes derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2" style={{ color: '#777777', lineHeight: '1.8' }}>
              <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
              <li><strong>Rectificación:</strong> Corregir información incorrecta o desactualizada</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos (derecho al olvido)</li>
              <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos para ciertos fines</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado</li>
              <li><strong>Retirar consentimiento:</strong> Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p className="mt-4" style={{ color: '#777777', lineHeight: '1.8' }}>
              Para ejercer estos derechos, contáctanos en: contacto@foodsaver.com
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              8. Menores de Edad
            </h2>
            <p style={{ color: '#777777', lineHeight: '1.8' }}>
              FoodSaver está destinado a personas mayores de 18 años. No recopilamos intencionalmente información de menores de edad. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              9. Enlaces a Terceros
            </h2>
            <p style={{ color: '#777777', lineHeight: '1.8' }}>
              Nuestra plataforma puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Te recomendamos leer sus políticas de privacidad antes de proporcionarles información personal.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              10. Transferencias Internacionales
            </h2>
            <p style={{ color: '#777777', lineHeight: '1.8' }}>
              Tus datos pueden ser transferidos y procesados en servidores ubicados fuera de Perú. Cuando esto ocurre, nos aseguramos de que existan medidas de protección adecuadas de acuerdo con las leyes aplicables.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              11. Cambios a esta Política
            </h2>
            <p style={{ color: '#777777', lineHeight: '1.8' }}>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios importantes por correo electrónico o mediante un aviso destacado en la plataforma. El uso continuado de FoodSaver después de los cambios constituye tu aceptación de la política actualizada.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              12. Contacto
            </h2>
            <p className="mb-2" style={{ color: '#777777', lineHeight: '1.8' }}>
              Si tienes preguntas, inquietudes o solicitudes sobre esta Política de Privacidad o el tratamiento de tus datos personales, puedes contactarnos:
            </p>
            <ul className="space-y-2" style={{ color: '#777777', lineHeight: '1.8' }}>
              <li><strong>Email:</strong> contacto@foodsaver.com</li>
              <li><strong>Teléfono:</strong> +51 944 123 456</li>
              <li><strong>Dirección:</strong> Trujillo, Perú</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
              13. Autoridad de Protección de Datos
            </h2>
            <p style={{ color: '#777777', lineHeight: '1.8' }}>
              Si consideras que tus derechos de protección de datos han sido vulnerados, puedes presentar una queja ante la Autoridad Nacional de Protección de Datos Personales de Perú.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Gracias por confiar en FoodSaver. Estamos comprometidos con la protección de tu privacidad.
          </p>
        </div>
      </div>
    </div>
  );
}
