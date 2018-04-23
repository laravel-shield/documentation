<template>
    <div class="box">
        <div class="stats">
            <div class="item">
                <h3>Installs</h3>
                <span>{{installs}}</span>
            </div>
            <div class="item">
                <h3>Version</h3>
                <span>{{version}}</span>
            </div>
            <div class="item">
                <h3>License</h3>
                <span>{{license}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['repo'],
        data() {
            return {
                installs: 0,
                version: 'unknown',
                license: 'unknown',
            }
        },
        mounted() {
            axios.get(`https://packagist.org/packages/${this.repo}.json`).then(({data}) => {
                this.installs = data.package.downloads.total;
            });
            axios.get(`https://api.github.com/repos/${this.repo}/releases/latest`).then(({data}) => {
                this.version = data.tag_name;
            });
            axios.get(`https://api.github.com/repos/${this.repo}`).then(({data}) => {
                this.license = data.license.spdx_id;
            });
        }
    }
</script>

<style scoped>
    .box {
        border: 1px solid #eaecef;
        border-radius: 3px;
        padding: 5px;
    }

    .stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }

    .item {
        display: grid;
        justify-items: center;
    }

    h3 {
        margin: 0;
    }
</style>