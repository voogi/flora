package hu.voga.util;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.security.SecureRandom;

@Component
public final class FileUtils
{
	private static final Logger logger = LoggerFactory.getLogger(FileUtils.class);
	private static SecureRandom random = new SecureRandom();

	/**
	 * Define default extension.
	 */
	private static final String DEFAULT_EXTENSION = ".jpg";

	/**
	 * Defined image location in file application.properties.
	 */
	@Value("${images.location}")
	private String imagesLocation;

	@Value("${cvs.location}")
	private String cvsLocation;


	public String uploadImage(String fileName, final byte[] image) throws IOException
	{
		logger.info("Storing file [" + fileName + "]...");
		if (!(imagesLocation.endsWith("/") || imagesLocation.endsWith(File.separator))) {
			imagesLocation += File.separator;
		}
		fileName = fileName.concat(new BigInteger(130, random).toString(32));
		final File file = new File(imagesLocation + fileName + DEFAULT_EXTENSION);
		if (!file.getParentFile().exists()) {
			file.getParentFile().mkdirs();
		}
		saveFile(file,image);
		return fileName.concat(DEFAULT_EXTENSION);
	}

	public String uploadCV(String fileName, final byte[] fileBytes) throws IOException
	{
		logger.info("Storing file [" + fileName + "]...");
		if (!(cvsLocation.endsWith("/") || cvsLocation.endsWith(File.separator))) {
			cvsLocation += File.separator;
		}
		final File file = new File(cvsLocation + fileName);
		if (!file.getParentFile().exists()) {
			file.getParentFile().mkdirs();
		}
		saveFile(file,fileBytes);
		return fileName;
	}

	private void saveFile(File file, byte[] bytes) throws IOException {
		ByteArrayInputStream byteArrayInputStream = null;
		FileOutputStream fileOutputStream = null;
		try {
			byteArrayInputStream = new ByteArrayInputStream(bytes);
			fileOutputStream = new FileOutputStream(file);
			IOUtils.copy(byteArrayInputStream, fileOutputStream);
			logger.info("File created [" + file.getName() + "]");
		} catch (final IOException e) {
			logger.error("Failed to upload file [" + file.getName() + "]", e);
			throw e;
		} finally {
			IOUtils.closeQuietly(byteArrayInputStream);
			IOUtils.closeQuietly(fileOutputStream);
		}
	}
}
