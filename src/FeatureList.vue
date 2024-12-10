<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    features: {
        type: Array,
        required: true,
    },
})
const { features } = toRefs(props)

const emits = defineEmits(['close'])
</script>

<template>
    <div v-if="features.length" class="card">
        <div class="card-header">
            <strong>Features</strong>
            <span class="float-end" @click="emits('close')">
                <FontAwesomeIcon icon="times-circle" />
            </span>
        </div>
        <div class="card-body">
            <table class="table table-sm table-striped">
                <thead>
                <tr>
                    <th>Identifiant Swisstopo</th>
                    <th>Identifiant EGRIS</th>
                    <th>Identifiant cantonal</th>
                    <th>Lien vers geoportail</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="feature in features" :key="feature.id">
                    <td><strong>{{ feature.id }}</strong></td>
                    <td>{{ feature.properties.egris_egrid }}</td>
                    <td>{{ feature.properties.identnd }}</td>
                    <td>
                        <a
                            :href="`https://${feature.properties.geoportal_url}`"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon="up-right-from-square" class="me-1" />
                            Lien
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
