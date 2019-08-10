<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-table :data="tableData" :row-key="row => row.index" style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="图书名称">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="图书介绍">
                                <span>{{ props.row.description }}</span>
                            </el-form-item>
                            <el-form-item label="作者">
                                <span>{{ props.row.rating }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column label="图书名称" prop="name">
                </el-table-column>
                <el-table-column label="图书介绍" prop="description">
                </el-table-column>
                <el-table-column label="作者" prop="rating">
                </el-table-column>
                <el-table-column label="操作" width="160">
                    <template slot-scope="scope">
                        <el-button size="small" @click="gai(scope.$index)">编辑</el-button>
                        <el-button size="small" type="danger" @click="del(scope.$index,tableData)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination">
                <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="10"
                    layout="total, prev, pager, next" :total="count+1">
                </el-pagination>
            </div>
            <el-dialog title="修改图书信息" :visible.sync="dialogFormVisible">
                <el-form :model="selectTable">
                    <el-form-item label="图书名称" label-width="100px">
                        <el-input v-model="selectTable.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="图书介绍" label-width="100px">
                        <el-input v-model="selectTable.description"></el-input>
                    </el-form-item>
                    <el-form-item label="作者" label-width="100px">
                        <el-input v-model="selectTable.rating"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="updatebook">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                count: 0,
                tableData: [],
                selectTable: {},
                dialogFormVisible: false,
                selectIndex: null,
                currentPage: 1,
                offset: 0,
                limit: 10,
            }
        },
        async created() {
            let books = await this.$axios.get(
                "https://www.easy-mock.com/mock/5a253821420a172ca90d034a/example/jsmg"
            );
            // console.log(books.data);
            // this.tableData = [];
            books.data.forEach((item, index) => {
                const tableData = {};
                tableData.name = item.book;
                tableData.description = item.jianjie;
                tableData.rating = item.author;
                tableData.index = index;
                this.count = index;
                this.tableData.push(tableData);

            });
            // console.log(this.tableData);
        },
        methods: {
            gai(index) {
                // console.log(this.tableData[row]);
                this.selectTable = this.tableData[index];
                // console.log(this.selectTable);
                this.dialogFormVisible = true;
            },

            del(index, rows) {
                rows.splice(index, 1);
            },
            updatebook() {
                this.dialogFormVisible = false;
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1) * this.limit;
                // this.tableData.slice(0,10)
            },
        },
    }
</script>

<style>
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

    .table_container {
        padding: 20px;
        width: 96%;
    }

    .Pagination {
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }

    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>