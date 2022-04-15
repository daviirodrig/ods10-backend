CREATE OR REPLACE FUNCTION insert_user_documents_func() RETURNS TRIGGER AS '
BEGIN
  INSERT INTO users_documents ("documentId", "userId")
  SELECT t1.id, NEW.id
  FROM documents t1;
  RETURN NEW;
END
' LANGUAGE plpgsql;
CREATE OR REPLACE TRIGGER insert_user_documents
AFTER
INSERT ON users FOR EACH ROW EXECUTE FUNCTION insert_user_documents_func();