import { fileURLToPath } from "node:url";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const __fileName = fileURLToPath(import.meta.url);
  const __dirName = path.dirname(__fileName);

  let filePath = "." + req.url;

  if (filePath === "./") {
    filePath = "./build/index.html";
  } else {
    filePath = path.join(__dirName, "./", "build", req.url);
  }

  const extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
  case ".js":
    contentType = "text/javascript";
    break;
  case ".css":
    contentType = "text/css";
    break;
  case ".json":
    contentType = "application/json";
    break;
  case ".png":
    contentType = "image/png";
    break;
  case ".jpg":
    contentType = "image/jpg";
    break;
  case ".svg":
    contentType = "image/svg+xml";
    break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        res.writeHead(404);
        res.end("404 Not Found");
      } else {
        res.writeHead(500);
        res.end("Internal Server Error: " + err.code);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });

});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
