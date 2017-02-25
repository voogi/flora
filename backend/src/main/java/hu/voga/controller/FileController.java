package hu.voga.controller;


import hu.voga.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;



import java.io.IOException;

/**
 * Created by GGyuri on 2017. 02. 25..
 */
@RestController
@RequestMapping("/api/file")
public class FileController {

    @Autowired
    private FileUtils fileUtils;

    @ResponseBody
    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public String uploadFile(@RequestParam("file") final MultipartFile file) throws IOException
    {
        return fileUtils.uploadImage("file", file.getBytes());
    }
}
