import { defineComponent, onBeforeUnmount, onMounted, reactive } from 'vue';

import { Toast } from 'antd-mobile-vue-next';

export const FileUpload = defineComponent({
  name: "App",
  setup(props, context) {
    //生命周期
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });

    const headers = reactive({ authorization: "authorization-text" }); //定义响应式数据，针对对象

    const handleChange = (info: any) => {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        Toast.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        Toast.fail(`${info.file.name} file upload failed.`);
      }
    };

    return () => (
      <>
        <a-upload
          name="file"
          multiple="true"
          accept=".csv,.tsx"
          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          action="/api/fileUpload/upload/"
          headers={headers}
          onChange={handleChange}
        >
          <a-button>
            <a-icon type="upload" /> 点击上传
          </a-button>
        </a-upload>
        <router-view />
        <div class="clearfix">
        </div>
      </>
    );
  },
});
