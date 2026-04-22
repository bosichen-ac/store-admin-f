<template>
  <div class="order-list" v-if="hasHistory">
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer ID</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>
      <tr v-for="order in history" :key="order.orderId">
        <td><router-link :to="`/history/${order.orderId}`">{{ order.orderId }}</router-link></td>
        <td>{{ order.customerId }}</td>
        <td>{{ order.status }}</td>
        <td>{{ orderTotal(order) }}</td>
      </tr>
    </table>
  </div>
  <div class="order-list" v-else>
    <h3>No order history</h3>
  </div> 
</template>

<script>
  export default {
    name: 'HistoryList',
    props: ['history'],
    emits: ['getAllOrders'],
    computed: {
      hasHistory() {
        return this.history.length > 0
      }
    },
    methods: {
      getAllOrders() {
        this.$emit('getAllOrders')
      },
      orderTotal(order) {
        let total = 0;
        order.items.forEach(item => {
          total += item.price * item.quantity;
        });
        return total.toFixed(2);
      }
    },
    beforeMount() {
      this.getAllOrders()
    }
  }
</script>

<style scoped>
a {
  color: #0000FF;
  text-decoration: underline;
}

.order-list {
  text-align: left;
}
</style>