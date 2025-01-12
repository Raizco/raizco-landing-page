<template>
  <footer class="footer">
    <section class="footer-content">
      <article class="contact-info">
        <h4 class="contact-info__title">Información de Contacto</h4>
        <ul class="contact-info-list">
          <li class="contact-info-list__item">
            <font-awesome
              class="property-location__icon"
              :icon="['fas', 'location-pin']"
            />
            <span>Calle 7 #54-56 Medellín (Campo Amor)</span>
          </li>
          <li class="contact-info-list__item">
            <font-awesome
              class="property-location__icon"
              :icon="['fas', 'phone']"
            />
            <span>310 552 7265</span>
          </li>
          <li class="contact-info-list__item">
            <font-awesome
              class="property-location__icon"
              :icon="['fas', 'clock']"
            />
            <span>Lun - Sab 9AM - 6PM</span>
          </li>
        </ul>
      </article>
    </section>
    <section class="footer-brand">
      <div class="col-12">
        <p class="text-center text-white">
          © 2025 todos los derechos reservados por RaizCo
        </p>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.footer-content {
  padding: 20px 20px;
  background-color: black;
}

.footer-brand {
  padding: 7px 0px;
  background-color: $primary-color;
  font-weight: 500;
}

.contact-info {
  &__title {
    color: $primary-color;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }
}

.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  &__item {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #ffffff;
  }
}
</style>
