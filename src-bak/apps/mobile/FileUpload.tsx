import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
} from "vue";
import axios from "axios";
import { message } from "ant-design-vue";
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
    const name = ref("上传文件"); //look
    const checkStatus = ref("文件");
    let file: any;

    const getFile = (event: any) => {
      file = event.target.files[0];
      console.log(file);
    };
    const submitForm = (event: any) => {
      event.preventDefault();
      let formData = new FormData();
      formData.append("file", file);
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      // 创建一个空的axios 对象
      const instance = axios.create({
        withCredentials: true, // 如果发送请求的时候需要带上token 验证之类的也可以写在这个对象里
        ...config,
      });

      instance
        .post("http://127.0.0.1:8000/fileUpload/upload/", formData)
        .then((res) => {
          if (res.data.code === 200) {
            alert(res.data.msg);
            checkStatus.value = JSON.stringify(res.data);
            console.log(res.data);
          } else if (res.data.code === 2) {
            alert(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        });
    };

    const handleChange = (info: any) => {
      // const data=info.file.response
      // if (data.code === 200) {
      //   message.success(`${data.msg}`);
      // } else if (data.code === 2) {
      //   message.error(`${data.msg}`);
      // } else {
      //   message.error(`${data.msg}`);
      // }
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    };

    return () => (
      <>
        {/* <form>
          {name.value}
          <input
            type="file"
            value=""
            id="file"
            accept=".csv,.tsx"
            onChange={(event: Event) => getFile(event)}
          />
          <button onClick={(event: Event) => submitForm(event)}>提交</button>
          <h1>{checkStatus.value}</h1>
        </form> */}
        <a-upload
          name="file"
          multiple="true"
          accept=".csv,.tsx"
          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          action="http://127.0.0.1:8000/fileUpload/upload/"
          headers={headers}
          onChange={handleChange}
        >
          <a-button>
            <a-icon type="upload" /> 点击上传
          </a-button>
        </a-upload>
        <router-view />
        <div class="clearfix">
          {/* <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            list-type="picture-card"
            file-list="fileList"
            onPreview="handlePreview"
            onChange="handleChange"
          >
            <div v-if="fileList.length < 8">
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload> */}
          {/* <a-modal
            visible="previewVisible"
            footer="null"
            onCancel="handleCancel"
          >
            <img alt="example" style="width: 100%" src="previewImage" />
          </a-modal> */}
        </div>
      </>
    );
  },
});
