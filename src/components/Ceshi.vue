<!-- src/components/Ceshi.vue -->
<template>
     <div class="jieguo-container">
        <div class="scrollable-content" ref="scrollArea">
            <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/照片/FviulPire291Y26x3GalCdW20vyb.png">
            <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/照片/Fl-w-mJlDURQrSBSL6UIqvwTZ2lZ.png">
            <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/照片/FuKa16711NRiunaar-ANzftP2_-o.png">
            <img src="https://www.codelover.club/files/stutasks/userID_884/currNo_29/照片/FsZGTuiY_HkddeIEh5IszMsjNGuR.png">
        </div>
    </div>
</template>

<script>
    export default {  
    name: 'Ceshi'  
  } 
</script>

<style>
.jieguo-container {
    width: 920px;
    overflow-y: auto; /* 允许垂直滚动 */
    max-height: 510px;
    margin-top: 25px;
}

.scrollable-content {
    display: flex;
    flex-direction: column; /* 图片堆叠 */
    gap: 10px; /* 图片间的间距，可调整 */
}

img {
    width: 100%; /* 图片宽度适应容器 */
    height: auto; /* 保持图片原始宽高比 */
}
</style>