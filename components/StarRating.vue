<template>
  <div class="rating">
    <ul class="list">
      <li
        :key="star"
        v-for="star in maxStars"
        :class="{ active: star <= stars }"
        @click="rate(star)"
        class="star"
      >
        <Star className="h-6 w-6 text-ghx-blue-900" />
        <!-- <icon scale="2" :name="star <= stars ? 'star' : 'star-o'" /> -->
      </li>
    </ul>
    <span v-if="hasCounter">{{ stars }} of {{ maxStars }}</span>
  </div>
</template>

<script>
import { Star } from "@heroicons/vue/24/solid";

export default {
  components: { Star },
  props: {
    grade: {
      type: Number,
      required: true,
    },
    maxStars: {
      type: Number,
      default: 5,
    },
    hasCounter: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      stars: this.grade,
    };
  },
  methods: {
    rate(star) {
      if (typeof star === "number" && star <= this.maxStars && star >= 0)
        this.stars = this.stars === star ? star - 1 : star;
    },
  },
};
</script>

<style scoped>
.rating {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 22px;
  color: #a7a8a8;
}

.list {
  margin: 0 0 5px 0;
  padding: 0;
  list-style-type: none;
}

.list:hover .star {
  color: red;
}

.star {
  display: inline-block;
  cursor: pointer;
}

/* .star:hover ~ .star:not(.active) {
  color: inherit;
} */

.active {
  color: red;
}
</style>
