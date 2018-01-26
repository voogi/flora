package hu.voga.controller;


import hu.voga.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;



import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by GGyuri on 2017. 02. 25..
 */
@RestController
@RequestMapping("/api/file")
public class FileController {

    @Autowired
    private FileUtils fileUtils;

    @ResponseBody
    @RequestMapping(value = "/upload/image", method = RequestMethod.POST)
    public String uploadImage(@RequestParam("file") final MultipartFile file) throws IOException
    {
        return fileUtils.uploadImage("file", file.getBytes());
    }

    @ResponseBody
    @RequestMapping(value = "/upload/cv", method = RequestMethod.POST)
    public String uploadCV(@RequestParam("file") final MultipartFile file) throws IOException
    {
        return fileUtils.uploadCV(file.getOriginalFilename(), file.getBytes());
    }

    @ResponseBody
    @RequestMapping(value = "/image", method = RequestMethod.POST)
    public Map<String, String> uploadImageFromTextEditor(@RequestParam("file") final MultipartFile file) throws IOException
    {
        Map<String, String> link = new HashMap<>();
        link.put("link", "http://81.2.255.161/static/images/" + fileUtils.uploadImage("file", file.getBytes()));
        return link;
    }
}
