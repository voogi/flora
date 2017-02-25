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
		ByteArrayInputStream byteArrayInputStream = null;
		FileOutputStream fileOutputStream = null;
		try {
			byteArrayInputStream = new ByteArrayInputStream(image);
			fileOutputStream = new FileOutputStream(file);
			IOUtils.copy(byteArrayInputStream, fileOutputStream);
			logger.info("File created [" + fileName + "]");
		} catch (final IOException e) {
			logger.error("Failed to upload file [" + fileName + "]", e);
			throw e;
		} finally {
			IOUtils.closeQuietly(byteArrayInputStream);
			IOUtils.closeQuietly(fileOutputStream);
		}
		return fileName.concat(DEFAULT_EXTENSION);
	}
}
