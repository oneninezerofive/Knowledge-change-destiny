<template>
    <div>
        <el-row style="margin-top: 20px;">
            <el-col :span="14" :offset="4">
                <header class="form_header">选择图书种类</header>
                <el-form :model="categoryForm" ref="categoryForm" label-width="110px" class="form">
                    <el-row class="category_select">
                        <el-form-item label="图书种类">
                            <el-select v-model="categoryForm.categorySelect" :placeholder="selectValue.label"
                                style="width:100%;">
                                <el-option v-for="item in categoryForm.categoryList" :key="item.value"
                                    :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-row>
                    <el-row class="add_category_row" :class="showAddCategory? 'showEdit': ''">
                        <div class="add_category">
                            <el-form-item label="图书种类" prop="name">
                                <el-input v-model="categoryForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="种类描述" prop="description">
                                <el-input v-model="categoryForm.description"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary">提交</el-button>
                            </el-form-item>
                        </div>
                    </el-row>
                    <div class="add_category_button" @click="addCategoryFun">
                        <i class="el-icon-caret-top edit_icon" v-if="showAddCategory"></i>
                        <i class="el-icon-caret-bottom edit_icon" v-else slot="icon"></i>
                        <span>添加图书种类</span>
                    </div>
                </el-form>
                <header class="form_header">添加图书</header>
                <el-form :model="bookForm" :rules="bookrules" ref="bookForm" label-width="110px" class="form book_form">
                    <el-form-item label="图书名称" prop="name">
                        <el-input v-model="bookForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="图书作者" prop="author">
                        <el-input v-model="bookForm.author"></el-input>
                    </el-form-item>
                    <el-form-item label="图书简介" prop="jianjie">
                        <el-input v-model="bookForm.jianjie"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="add()">确认添加图书</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                categoryForm: {
                    categoryList: [{
                    value:"小说",
                    },{
                        value:"科幻",
                    },{
                        value:"花里胡哨",
                    },{
                        value:"丧心病狂",
                    }],
                    categorySelect: '',
                    name: '',
                    description: '',
                },
                bookForm: {
                    name: '',
                    jianjie: '',
                    author: '',
                },
                bookrules: {
                    name: [{
                        required: true,
                        message: '请输入图书名称',
                        trigger: 'blur'
                    }, ],
                },

                showAddCategory: false,
            }
        },
        computed: {
            selectValue: function () {
                return this.categoryForm.categoryList[this.categoryForm.categorySelect] || {}
            }
        },
        methods: {   
            addCategoryFun() {
                this.showAddCategory = !this.showAddCategory;
            },
            add(){}
        }
    }
</script>

<style scoped>
    .form {
        min-width: 400px;
        margin-bottom: 30px;
    }

    .form:hover {
        box-shadow: 0 0 10px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
        border-radius: 6px;
        transition: all 400ms;
    }

    .book_form {
        border: 1px solid #eaeefb;
        padding: 10px 10px 0;
    }

    .form_header {
        text-align: center;
        margin-bottom: 10px;
    }

    .category_select {
        border: 1px solid #eaeefb;
        padding: 10px 30px 10px 10px;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
    }

    .add_category_row {
        height: 0;
        overflow: hidden;
        transition: all 400ms;
        background: #f9fafc;
    }

    .showEdit {
        height: 185px;
    }

    .add_category {
        background: #f9fafc;
        padding: 10px 30px 0px 10px;
        border: 1px solid #eaeefb;
        border-top: none;
    }

    .add_category_button {
        text-align: center;
        line-height: 40px;
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
        border: 1px solid #eaeefb;
        border-top: none;
        transition: all 400ms;
    }

    .add_category_button:hover {
        background: #f9fafc;
    }

    span {
        font: 14px, #999;
        transition: all 400ms;
    }

    .edit_icon {
        color: #ccc;
        transition: all 400ms;
    }
</style>