# STAGE 1: Build the Vite/React application
# ใช้ node:18-alpine เป็นอิมเมจพื้นฐาน และตั้งชื่อ stage นี้ว่า "builder"
FROM node:18-alpine AS builder

# ตั้งค่าไดเรกทอรีการทำงานภายในคอนเทนเนอร์เป็น /app
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json (หรือ yarn.lock ถ้ามี)
# เครื่องหมาย * ช่วยให้ครอบคลุมทั้ง package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies ของโปรเจกต์
# หากคุณใช้ yarn ให้เปลี่ยนเป็น RUN yarn install
RUN npm install

# คัดลอกซอร์สโค้ดของโปรเจกต์ทั้งหมดจาก context ปัจจุบันเข้ามาใน /app ของอิมเมจ
COPY . .

# สร้าง build ของโปรเจกต์ React/Vite
# คำสั่งนี้จะสร้างโฟลเดอร์ /app/dist (ตามค่าเริ่มต้นของ Vite)
RUN npm run build

# STAGE 2: Serve the application with Nginx
# ใช้ nginx:alpine เป็นอิมเมจพื้นฐานสำหรับ stage ที่สอง
FROM nginx:alpine

# คัดลอกไฟล์ build ที่ได้จาก stage "builder"
# จากโฟลเดอร์ /app/dist ใน stage "builder"
# ไปยัง /usr/share/nginx/html ซึ่งเป็น default document root ของ Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# (Optional) หากคุณมีไฟล์ config Nginx ของตัวเอง สามารถ uncomment บรรทัดด้านล่าง
# และตรวจสอบให้แน่ใจว่ามีไฟล์ nginx.conf อยู่ใน context ของ Docker build
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# เปิดพอร์ต 80 เพื่อให้ Nginx สามารถรับ traffic ได้
EXPOSE 80

# คำสั่งเริ่มต้นเมื่อคอนเทนเนอร์เริ่มทำงาน
# ให้ Nginx ทำงานใน foreground (daemon off;)
CMD ["nginx", "-g", "daemon off;"]
